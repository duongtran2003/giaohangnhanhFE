import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import OrderTableFilter from "./OrderTableFilter";
import Pagination from "src/share/components/Pagination";
import OrderCancelModal from "./OrderCancelModal";
import { MoonLoader } from "react-spinners";

export default function OrderTable() {
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isCancelModalShow, setIsCancelModalShow] = useState(false);
  const [cancellingId, setCancellingId] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setPage(1);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    console.log("filter change in useeffect");
  }, [filter]);

  const handleRowClick = (id) => {
    window.open(`/order/${id}`, "_blank");
  };

  const handleCancelClick = (event, id) => {
    event.stopPropagation();
    setCancellingId(id);
    setIsCancelModalShow(true);
  };

  const handleCancelModalClose = () => {
    setCancellingId(null);
    setIsCancelModalShow(false);
  };

  const handleCancelOK = () => {
    // call api here
  };

  const tableData = [
    {
      id: 1,
      code: "D1",
      recipent: "Duong TranDuong TranDuong TranDuong TranDuong TranDuong Tran",
      recipentPhone: "123456123456123456123456123456123456",
      description:
        "blah blah this is a deliveryblah blah this is a deliveryblah blah this is a delivery",
      status: "IN_TRANSIT",
    },
    {
      id: 2,
      code: "D2",
      recipent: "Duong TranDuong TranDuong TranDuong TranDuong TranDuong Tran",
      recipentPhone: "123456123456123456123456123456123456",
      description:
        "blah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a deliveryblah blah this is a delivery",
      status: "IN_TRANSIT",
    },
    {
      id: 3,
      code: "D3",
      recipent: "Duong TranDuong TranDuong TranDuong TranDuong TranDuong Tran",
      recipentPhone: "123456123456123456123456123456123456",
      description:
        "blah blah this is a deliveryblah blah this is a deliveryblah blah this is a delivery",
      status: "IN_TRANSIT",
    },
  ];

  return (
    <div className="max-w-fit flex flex-col relative">
      {isLoadingData && (
        <div className="absolute z-[80] flex justify-center items-center h-full w-full top-0 left-0">
          <MoonLoader color="#EE0033" />
        </div>
      )}
      <OrderTableFilter filters={filter} onFilterChange={handleFilterChange} />
      <div className="overflow-x-auto max-w-full mb-2 w-fit shadow-md rounded-sm mt-4">
        <table className="text-sm min-w-fit w-fit">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-3 py-4 text-left min-w-[80px] max-w-[80px]">
                Mã đơn
              </th>
              <th className="px-3 py-4 text-left min-w-[150px] max-w-[150px]">
                Người nhận
              </th>
              <th className="px-3 py-4 text-left min-w-[150px] max-w-[150px]">
                SĐT
              </th>
              <th className="px-3 py-4 text-left min-w-[500px] max-w-[700px]">
                Mô tả
              </th>
              <th className="px-3 py-4 text-left min-w-[140px] max-w-[140px]">
                Trạng thái
              </th>
              <th className="px-3 py-4 text-left max-w-[130px] min-w-[130px]">
                Hành động
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((order, index) => (
              <tr
                key={order.id}
                onClick={() => handleRowClick(order.id)}
                style={{
                  backgroundColor: index % 2 == 1 ? "#F1F5F9" : "white",
                }}
                className="hover:!bg-red-100/50 cursor-pointer duration-100"
              >
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[80px] max-w-[80px]"
                  title={order.code}
                >
                  {order.code}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]"
                  title={order.recipent}
                >
                  {order.recipent}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]"
                  title={order.recipentPhone}
                >
                  {order.recipentPhone}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[500px] max-w-[700px]"
                  title={order.description}
                >
                  {order.description}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[140px] max-w-[140px]"
                  title={order.status}
                >
                  {order.status}
                </td>
                <td className="px-2 py-3 max-w-[130px] min-w-[130px]">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={(e) => handleCancelClick(e, order.id)}
                      className="px-4 flex items-center cursor-pointer bg-red-700 hover:brightness-95 duration-100 text-white rounded-sm py-2"
                    >
                      <DeleteOutlineIcon fontSize="small" />
                      <span>Hủy đơn</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="self-end">
        <Pagination
          page={page}
          pageSize={pageSize}
          total={52}
          handlePageChange={(page) => handlePageChange(page)}
          handlePageSizeChange={(size) => handlePageSizeChange(size)}
        />
      </div>
      {isCancelModalShow && (
        <OrderCancelModal
          onCancel={handleCancelModalClose}
          onOK={handleCancelOK}
          cancellingId={cancellingId}
        />
      )}
    </div>
  );
}
