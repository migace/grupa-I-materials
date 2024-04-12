const client1 = {
  name: "Client 1",
  invoices: [4563, 1123, 4567, 1111],
};
const client2 = {
  name: "Client 2",
  invoices: [1234, 5678, 9012, 3456],
};
const client3 = {
  name: "Client 3",
  invoices: [1111, 2222, 3333, 4444],
};
const client4 = {
  name: "Client 4",
  invoices: [5555, 6666, 7777, 8888],
};
const client5 = {
  name: "Client 5",
  invoices: [9999, 1010, 1111, 1212],
};

const clients = [client1, client2, client3, client4, client5];

for (let i = 0; i < clients.length; i++) {
  const currentClient = clients[i];
  let sumOfInvoices = 0;

  for (let j = 0; j < currentClient.invoices.length; j++) {
    sumOfInvoices += currentClient.invoices[j];
  }

  console.log(
    `Klient: ${
      currentClient.name
    }, wartość faktur netto: ${sumOfInvoices}, wartość faktur brutto: ${
      sumOfInvoices * 1.23
    }`
  );
}
