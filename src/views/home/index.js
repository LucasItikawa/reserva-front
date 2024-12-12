import React, { useEffect, useState } from "react";
import { Form, Row, Col, Card, Button, Alert } from "antd";
import Reserva from "./reserva";
import { ArrowLeftOutlined } from "@ant-design/icons";
import ListaReserva from "./lista-reserva";
import reservaService from "../../service/reserva-service";

const Home = () => {
  const [form] = Form.useForm();
  const [steps, setSteps] = useState(0);
  const [reservas, setReservas] = useState([]);

  const onFinish = async (values) => {
    try {
      await reservaService.create(values);
      Alert.success("Reserva criada com sucesso!");
      setSteps(0);
    } catch (error) {
      console.error("Erro ao criar a reserva:", error);
    }
  };

  useEffect(async () => {
    const resp = await reservaService.getAll();
    setReservas(resp);
    // eslint-disable-next-line
  }, []);

  const renderForm = () => {
    switch (steps) {
      case 1:
        return <Reserva />;
      case 2:
        return <ListaReserva reservas={reservas} />;

      default:
    }
  };

  return (
    <Row
      justify="center"
      style={{
        backgroundColor: "#1c1c1c",
        width: "100vw",
        height: "100vh",
        color: "#ffffff",
      }}
    >
      <Col
        xs={24}
        sm={16}
        md={12}
        lg={8}
        style={{
          marginTop: "20vh",
        }}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Row justify="center" style={{ marginBottom: 20 }}>
            <Col>
              <h1
                style={{
                  color: "#ffffff",
                }}
              >
                Reserva de salas
              </h1>
            </Col>
          </Row>
          <Card
            bordered={false}
            style={{ backgroundColor: "#333333", color: "#ffffff" }}
          >
            {steps === 0 ? (
              <Row justify="center" style={{ marginBottom: 20 }}>
                <Col span={24} style={{ marginBottom: 10 }}>
                  <Button
                    type="button"
                    onClick={() => setSteps(1)}
                    style={{
                      width: "100%",
                      backgroundColor: "#1890ff",
                      color: "#ffffff",
                      border: "none",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Cadastrar reserva
                  </Button>
                </Col>
                <Col span={24}>
                  <Button
                    type="button"
                    onClick={() => setSteps(2)}
                    style={{
                      width: "100%",
                      backgroundColor: "#52c41a",
                      color: "#ffffff",
                      border: "none",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Minhas reservas
                  </Button>
                </Col>
              </Row>
            ) : (
              <Button
                icon={
                  <ArrowLeftOutlined
                    style={{
                      color: "#ffffff",
                    }}
                  />
                }
                type="button"
                onClick={() => setSteps(0)}
              ></Button>
            )}
            {renderForm()}
          </Card>
        </Form>
      </Col>
    </Row>
  );
};

export default Home;
