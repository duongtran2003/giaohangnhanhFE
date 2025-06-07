import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AdminOrderTableFilter from "./AdminOrderTableFilter";
import Pagination from "src/share/components/Pagination";
import { MoonLoader } from "react-spinners";
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import AdminOrderCancelModal from "./AdminOrderCancelModal";
import AdminOrderAssignModal from "./AdminOrderAssignModal";

export default function AdminOrderTable() {
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isCancelModalShow, setIsCancelModalShow] = useState(false);
  const [isAssignModalShow, setIsAssignModalShow] = useState(false);
  const [cancellingId, setCancellingId] = useState(null);
  const [assigningId, setAssigningId] = useState(null);
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

  const handleAssignClick = (event, id) => {
    event.stopPropagation();
    setAssigningId(id);
    setIsAssignModalShow(true);
  };

  const handleCancelModalClose = () => {
    setCancellingId(null);
    setIsCancelModalShow(false);
  };

  const handleAssignModalClose = () => {
    setAssigningId(null);
    setIsAssignModalShow(false);
  };

  const handleCancelOK = () => {
    // call api here
  };

  const handleAssignOK = () => {
    // call api here
  };

  const tableData = [
    {
      id: 1,
      code: "D1",
      sender: "Duong TranDuong TranDuong TranDuong TranDuong TranDuong Tran",
      pickupAddress: "123456123456123456123456123456123456",
      shippingAddress: "aowidjaiowdj aowidjaiowdj ajajajajaj ajawjdjawdjawoidjawdoiawja ajawjdajwdj",
      description:
        "blah blah this is a deliveryblah blah this is a deliveryblah blah this is a delivery",
      status: "IN_TRANSIT",
    },
    {
      id: 2,
      code: "D2",
      sender: "Duong TranDuong TranDuong TranDuong TranDuong TranDuong Tran",
      pickupAddress: "123456123456123456123456123456123456",
      shippingAddress: "aowidjaiowdj aowidjaiowdj ajajajajaj ajawjdjawdjawoidjawdoiawja ajawjdajwdj",
      description:
        "blah blah this is a deliveryblah blah this is a deliveryblah blah this is a delivery",
      status: "IN_TRANSIT",
    },
    {
      id: 3,
      code: "D3",
      sender: "Duong TranDuong TranDuong TranDuong TranDuong TranDuong Tran",
      pickupAddress: "123456123456123456123456123456123456",
      shippingAddress: "aowidjaiowdj aowidjaiowdj ajajajajaj ajawjdjawdjawoidjawdoiawja ajawjdajwdj",
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
      <AdminOrderTableFilter filters={filter} onFilterChange={handleFilterChange} />
      <div className="overflow-x-auto max-w-full mb-2 w-fit shadow-md rounded-sm mt-4">
        <table className="text-sm min-w-fit w-fit">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-3 py-4 text-left min-w-[80px] max-w-[80px]">
                Mã đơn
              </th>
              <th className="px-3 py-4 text-left min-w-[150px] max-w-[150px]">
                Người gửi
              </th>
              <th className="px-3 py-4 text-left min-w-[150px] max-w-[150px]">
                Địa chỉ lấy
              </th>
              <th className="px-3 py-4 text-left min-w-[150x] max-w-[150px]">
                Địa chỉ nhận
              </th>
              <th className="px-3 py-4 text-left min-w-[500px] max-w-[500px]">
                Mô tả
              </th>
              <th className="px-3 py-4 text-left min-w-[120px] max-w-[120px]">
                Trạng thái
              </th>
              <th className="px-3 py-4 text-left max-w-[250px] min-w-[250px]">
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
                  title={order.sender}
                >
                  {order.sender}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]"
                  title={order.pickupAddress}
                >
                  {order.pickupAddress}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]"
                  title={order.shippingAddress}
                >
                  {order.shippingAddress}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[500px] max-w-[500px]"
                  title={order.description}
                >
                  {order.description}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[120px] max-w-[120px]"
                  title={order.status}
                >
                  {order.status}
                </td>
                <td className="px-2 py-3 max-w-[250px] min-w-[250px]">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={(e) => handleCancelClick(e, order.id)}
                      className="px-4 flex items-center cursor-pointer bg-red-700 hover:brightness-95 duration-100 text-white rounded-sm py-2"
                    >
                      <DeleteOutlineIcon fontSize="small" />
                      <span>Hủy đơn</span>
                    </button>
                    <button
                      onClick={(e) => handleAssignClick(e, order.id)}
                      className="px-4 flex items-center cursor-pointer bg-green-700 hover:brightness-95 duration-100 text-white rounded-sm py-2"
                    >
                      <AssignmentAddIcon fontSize="small" />
                      <span>Giao đơn</span>
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
        <AdminOrderCancelModal
          onCancel={handleCancelModalClose}
          onOK={handleCancelOK}
          cancellingId={cancellingId}
        />
      )}
      {isAssignModalShow && (
        <AdminOrderAssignModal
          onCancel={handleAssignModalClose}
          onOK={handleAssignOK}
          cancellingId={assigningId}
        />
      )}
    </div>
  );
}
