import axios from "axios";
import { SalePage } from "components/types/sales";
import { formatLocalDate } from "components/utils/format";
import { BASE_URL } from "components/utils/request";
import { useEffect, useState } from "react";

const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales?page=0&size=10&sort=date,desc`)
      .then((response) => {
        setPage(response.data);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{formatLocalDate(item.date, "dd/mm/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
