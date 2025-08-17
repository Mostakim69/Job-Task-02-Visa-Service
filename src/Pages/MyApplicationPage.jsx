import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select, message, Card, Progress, Checkbox } from "antd";
import axios from "axios";

const MyApplicationPage = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // Define steps for progress tracking
  const steps = [
    { id: 1, name: "Personal Details" },
    { id: 2, name: "Document Submission" },
    { id: 3, name: "Payment" },
    { id: 4, name: "Interview" },
    { id: 5, name: "Approval" },
  ];

  // Load applications from localStorage on component mount
  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("applications")) || [];
      const applicationsArray = Array.isArray(stored) ? stored : [];
      setApplications(applicationsArray);
    } catch (error) {
      messageApi.error("Failed to load applications from storage.");
      console.error("Error loading applications:", error);
    }
  }, [messageApi]);

  // Open modal and set form values for the selected application
  const handleUpdateClick = (app) => {
    setSelectedApp(app);
    form.setFieldsValue({
      name: app.name || "",
      passportNo: app.passportNo || "",
      visaType: app.visaType || "",
      completedSteps: app.completedSteps || [],
    });
    setIsModalOpen(true);
  };

  const saveToMockAPI = async (application) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", application);
      console.log("Mock API response:", response.data);
      return true;
    } catch (error) {
      console.error("Error saving to mock API:", error);
      messageApi.error("Failed to save to server. Saved locally instead.");
      return false;
    }
  };

  // Handle form submission
  const handleFormSubmit = async (values) => {
    const updatedApplications = applications.map((app) =>
      app.id === selectedApp.id
        ? {
            ...app,
            ...values,
            completedSteps: values.completedSteps || [],
            status: values.completedSteps?.length === steps.length ? "Completed" : "In Progress",
            progress: Math.round((values.completedSteps?.length / steps.length) * 100),
          }
        : app
    );

    try {
      localStorage.setItem("applications", JSON.stringify(updatedApplications));
      // Save to mock API
      await saveToMockAPI({ id: selectedApp.id, ...values });
      setApplications(updatedApplications);
      setIsModalOpen(false);
      messageApi.success("Application updated successfully!");
    } catch (error) {
      messageApi.error("Failed to update application.");
      console.error("Error updating application:", error);
    }
  };

  return (
    <div className="w-11/12 mx-auto p-6 min-h-screen fira-sans">
      {contextHolder}
      <h1 className="text-3xl font-bold mb-6 text-center text-gray=800">My Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <Card
            key={app.id}
            className="hover:scale-105 transition"
            role="region"
            aria-label={`Application ${app.title}`}
          >
            <h3 className="font-bold text-2xl pb-3 text-[#2fcece]">{app.title}</h3>
            <p className="text-lg">
              <strong>Name:</strong> {app.name || "Not added"}
            </p>
            <p className="text-lg">
              <strong>Passport No:</strong> {app.passportNo || "Not added"}
            </p>
            <p className="text-lg">
              <strong>Visa Type:</strong> {app.visaType || "Not added"}
            </p>
            <p className="text-lg">
              <strong>Status:</strong> {app.status || "Pending"}
            </p>
            <Progress
              percent={app.progress || 0}
              status={app.status === "Completed" ? "success" : "active"}
              className="my-2"
              aria-label={`Progress: ${app.progress || 0}%`}
            />
            <Button
              type="primary"
              onClick={() => handleUpdateClick(app)}
              aria-label={`Update application ${app.title}`}
            >
              Update Progress
            </Button>
          </Card>
        ))}
      </div>

      {/* Modal Form */}
      <Modal
        title="Update Application"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        aria-labelledby="modal-title"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          className="fira-sans"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input aria-required="true" />
          </Form.Item>
          <Form.Item
            label="Passport No."
            name="passportNo"
            rules={[{ required: true, message: "Please enter passport number" }]}
          >
            <Input aria-required="true" />
          </Form.Item>
          <Form.Item
            label="Visa Type"
            name="visaType"
            rules={[{ required: true, message: "Please select visa type" }]}
          >
            <Select placeholder="Select visa type" aria-required="true">
              <Select.Option value="Tourist">Tourism & Travel</Select.Option>
              <Select.Option value="Employment">Employment</Select.Option>
              <Select.Option value="Education">Education</Select.Option>
              <Select.Option value="Family">Family & Settlement</Select.Option>
              <Select.Option value="Residency">Permanent Residency</Select.Option>
              <Select.Option value="Special">Special Visas</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Completed Steps" name="completedSteps">
            <Checkbox.Group>
              {steps.map((step) => (
                <Checkbox key={step.id} value={step.id} aria-label={step.name}>
                  {step.name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              aria-label="Submit application updates"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MyApplicationPage;