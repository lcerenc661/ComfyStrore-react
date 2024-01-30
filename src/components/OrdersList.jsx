import day from 'dayjs';
import { useLoaderData } from "react-router-dom"

const OrdersList = () => {
  const {orders, meta} = useLoaderData()
  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">
        total orders: {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* HEAD */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Cost</th>
              <th className="hidden sm:block">Name</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order)=>{
              console.log(order);
              const id = order.id
              const {name, address, numItemsCart, orderTotal, createdAt} = order.attributes;
              const date = day(createdAt).format('hh:mm a - MMM D, YYYY')
              return <tr key={id}>
                <td>{name}</td>
                <td>{address}</td>
                <td>{numItemsCart}</td>
                <td>{orderTotal}</td>
                <td className="hidden sm:block">{date}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default OrdersList