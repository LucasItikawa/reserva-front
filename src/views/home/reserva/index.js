import React from "react";
import { Form, Button, Select, TimePicker, Row, DatePicker } from "antd";
import { localEnum } from "../../../enum/local-enum";

const Reserva = () => {
  const locaisOptions = localEnum.map((local) => ({
    value: local.id,
    label: local.local,
  }));

  return (
    <Row
      justify="center"
      style={{
        flexDirection: "column",
      }}
    >
      <Form.Item
        label={<span style={{ color: "#ffffff" }}>Local</span>}
        name="local"
        rules={[
          {
            required: true,
            message: "Por favor, selecione o local!",
          },
        ]}
      >
        <Select placeholder="Selecione o local" options={locaisOptions} />
      </Form.Item>
      <Form.Item
        label={<span style={{ color: "#ffffff" }}>Dia </span>}
        name="dia"
        rules={[
          {
            required: true,
            message: "Por favor, selecione o dia!",
          },
        ]}
      >
        <DatePicker format={"DD/MM/YYYY"} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: "#ffffff" }}>Horário </span>}
        name="horario"
        rules={[
          {
            required: true,
            message: "Por favor, selecione o horário!",
          },
        ]}
      >
        <TimePicker format="HH:mm" style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          block
          style={{
            backgroundColor: "#4CAF50",
            borderColor: "#4CAF50",
          }}
        >
          Enviar
        </Button>
      </Form.Item>
    </Row>
  );
};

export default Reserva;
