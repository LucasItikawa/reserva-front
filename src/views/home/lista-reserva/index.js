import { Card } from "antd";
import dayjs from "dayjs";
import React from "react";
import { localEnum } from "../../../enum/local-enum";

const ListaReserva = ({ reservas }) => {
  return (
    <div>
      {reservas.map((reserva) => (
        <Card
          key={reserva.id}
          title={localEnum.find((local) => local.id === reserva.local).local}
          style={{ width: "100%", marginTop: 16 }}
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
