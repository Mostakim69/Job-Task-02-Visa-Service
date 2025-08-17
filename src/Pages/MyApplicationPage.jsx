import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select, message, Card, Progress } from "antd";

const MyApplicationPage = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  // Load applications from localStorage on component mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("applications")) || [];
    const applicationsArray = Array.isArray(stored) ? stored : [];
    setApplications(applicationsArray);
  }, []);

  // Open modal and set form values for the selected application
  const handleUpdateClick = (app) => {
    setSelectedApp(app);
    form.setFieldsValue({
      name: app.name || "",
      passportNo: app.passportNo || "",
      visaType: app.visaType || "",
    });
    setIsModalOpen(true);
  };

  // Handle form submission
  const handleFormSubmit = (values) => {
    const updatedApplications = applications.map((app) =>
      app.id === selectedApp.id
        ? { ...app, ...values, status: "Updated" }
        : app
    );

    localStorage.setItem("applications", JSON.stringify(updatedApplications));
    setApplications(updatedApplications);
    setIsModalOpen(false);
    messageApi.success("Application updated successfully!");
  };

  return (
    <div className="w-11/12 mx-auto p-6 min-h-screen fira-sans">
      {contextHolder}
      <h1 className="text-3xl font-bold mb-6 text-center text-[#1C6EA4]">My Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <Card key={app.id} className="hover:scale-105 transition">
            <h3 className="font-bold text-2xl pb-3 text-[#1C6EA4]">{app.title}</h3>
            <p className="text-lg"><strong>Name:</strong> {app.name || "Not added"}</p>
            <p className="text-lg"><strong>Passport No:</strong> {app.passportNo || "Not added"}</p>
            <p className="text-lg"><strong>Visa Type:</strong> {app.visaType || "Not added"}</p>
            <p className="text-lg">
              <strong>Status:</strong> {app.status || "Pending"}
            </p>
            <Progress
              percent={app.status === "Updated" ? 100 : 50}
              status={app.status === "Updated" ? "success" : "active"}
              className="my-2"
            />
            <Button type="primary" onClick={() => handleUpdateClick(app)}>
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
      >
        <Form form={form} layout="vertical" onFinish={handleFormSubmit} className="fira-sans">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Passport No."
            name="passportNo"
            rules={[{ required: true, message: "Please enter passport number" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Visa Type"
            name="visaType"
            rules={[{ required: true, message: "Please select visa type" }]}
          >
            <Select placeholder="Select visa type">
              <Select.Option value="Tourist">Tourism & Travel</Select.Option>
              <Select.Option value="Employment">Employment</Select.Option>
              <Select.Option value="Education">Education</Select.Option>
              <Select.Option value="Family">Family & Settlement</Select.Option>
              <Select.Option value="Residency">Permanent Residency</Select.Option>
              <Select.Option value="Special">Special Visas</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default MyApplicationPage;
