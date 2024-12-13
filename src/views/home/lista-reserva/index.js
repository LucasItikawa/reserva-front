import { Card, Button } from "antd";
import dayjs from "dayjs";
import React from "react";
import { localEnum } from "../../../enum/local-enum";
import { DeleteOutlined } from "@ant-design/icons";

const ListaReserva = ({ reservas, onDelete }) => {
  return (
    <div>
      {reservas.map((reserva) => (
        <Card
          key={reserva.id}
          title={localEnum.find((local) => local.id === reserva.local).local}
          style={{ width: "100%", marginTop: 16 }}
          actions={[
            <Button
              type="primary"
              danger
              icon={<DeleteOutlined />}
              onClick={() => onDelete(reserva.id)}
            >
              Excluir
            </Button>
          ]}
        >
          <p>
            <strong>Dia:</strong>{" "}
            {dayjs(reserva.dia).format("DD/MM/YYYY HH:mm")}
          </p>
          <p>
            <strong>Horário:</strong> {dayjs(reserva.horario).format("HH:mm")}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default ListaReserva;
