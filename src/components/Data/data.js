const data = [
  {
    invoice_id: "#AHGA68",
    date: "23 / 09 / 2022",
    customer: "Jacob Marcus",
    payable_amount: 100,
    paid_amount: 2000,
    due_amount: 0,
  },
  {
    invoice_id: "#AUGA68",
    date: "23 / 09 / 2022",
    customer: "Marcus",
    payable_amount: 100,
    paid_amount: 2000,
    due_amount: 0,
  },
];

export default data;
data.filter((d) => {
  return console.log(d.customer.includes("M") ? d : "");
});
