import { Card } from "antd";
import dayjs from "dayjs";
import React from "react";

const ListaReserva = ({ reservas }) => {
  return (
    <div>
      {reservas.map((reserva) => (
        <Card
          key={reserva.id}
          title={reserva.local}
          style={{ width: "100%", marginTop: 16 }}
        >
          <p>
            <strong>Inicio:</strong>{" "}
            {dayjs(reserva.inicio).format("DD/MM/YYYY HH:mm")}
          </p>
          <p>
            <strong>Fim:</strong>{" "}
            {dayjs(reserva.fim).format("DD/MM/YYYY HH:mm")}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default ListaReserva;
