import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const totalAmount = transactions.reduce((total, transaction) => {
    if (transaction.type === "deposit") {
      return total + transaction.amount;
    }
    return total - transaction.amount;
  }, 0);

  const totalDeposit = transactions.reduce((total, transaction) => {
    if (transaction.type === "deposit") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  const totalWithdraw = transactions.reduce((total, transaction) => {
    if (transaction.type === "withdraw") {
      return total + transaction.amount;
    }
    return total;
  }, 0);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalDeposit)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalWithdraw)}
        </strong>
      </div>
      <div className="heighlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalAmount)}
        </strong>
      </div>
    </Container>
  );
}
