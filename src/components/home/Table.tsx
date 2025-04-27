import { DataTable } from "mantine-datatable";
import React from "react";

const Table = () => {
  const [page, setPage] = React.useState(1);

  return (
    <div className={`w-full h-[80vh] flex flex-col items-start justify-start`}>
      <DataTable
        className={`w-full`}
        withTableBorder
        borderRadius="md"
        striped
        highlightOnHover
        page={page}
        onPageChange={setPage}
        totalRecords={4}
        recordsPerPage={5}
        columns={[
          { accessor: "names" },
          { accessor: "email" },
          { accessor: "telephone" },
          { accessor: "role" },
        ]}
        records={[
          {
            names: "Remy Tresor",
            email: "remytresor@gmail.com",
            telephone: "+250788123456",
            role: "ADMIN",
          },
          {
            names: "Alexis Karongo",
            email: "karongo@gmail.com",
            telephone: "+250789123456",
            role: "USER",
          },
          {
            names: "Lawrence Kin",
            email: "kin@gmail.com",
            telephone: "+250798123456",
            role: "USER",
          },
          {
            names: "Arda Guller",
            email: "guller@gmail.com",
            telephone: "+250778123456",
            role: "USER",
          },
        ]}
      />
    </div>
  );
};

export default Table;
