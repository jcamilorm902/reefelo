import "./RaffleTickets.scss";
import classnames from "classnames";

type RaffleTicket = {
  id: string;
  enabled: boolean;
  payed: boolean;
};

type OnTicketPressed = (id: string) => void;

type RaffleTicketsProps = {
  tickets: Array<RaffleTicket>;
  onTicketPressed: OnTicketPressed;
};

const RaffleTickets: React.FC<RaffleTicketsProps> = ({
  tickets,
  onTicketPressed,
}: RaffleTicketsProps) => {
  return (
    <div className="raffle-tickets-container">
      {tickets.map((ticket) => {
        const { id, enabled, payed } = ticket;
        return (
          <label
            className={classnames("raffle-ticket-card", {
              "disabled-ticket": !enabled,
              "payed-ticket": !enabled && payed,
            })}
            key={id}
            data-testid={`ticket-btn-${id}`}
            onClick={() => onTicketPressed(id)}
          >
            {id}
          </label>
        );
      })}
    </div>
  );
};

export default RaffleTickets;
