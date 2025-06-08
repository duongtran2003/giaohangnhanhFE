import { useEffect, useState } from "react";
import AdminOrderTableFilter from "./AdminOrderTableFilter";
import Pagination from "src/share/components/Pagination";
import { MoonLoader } from "react-spinners";
import AssignmentAddIcon from "@mui/icons-material/AssignmentAdd";
import AdminOrderAssignModal from "./AdminOrderAssignModal";
import { orderApi } from "src/share/api";
import { toast } from "react-toastify";
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function AdminOrderTable() {
  const [filter, setFilter] = useState({});
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [isAssignModalShow, setIsAssignModalShow] = useState(false);
  const [assigningId, setAssigningId] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);
  const [tableData, setTableData] = useState([]);

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
    window.open(`/admin/order/detail/${id}`, "_blank");
  };

  const handleAssignClick = (id, status) => {
    if (status != "Tạo đơn") {
      return;
    }
    setAssigningId(id);
    setIsAssignModalShow(true);
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

  const handleFilter = async () => {
    setIsLoadingData(true);
    try {
      const response = await orderApi.getAdminOrder(filter, page, pageSize);
      console.log(response.data);
      setPage(response.data.data.pageInfo.pageIndex);
      setPageSize(response.data.data.pageInfo.pageSize);
      setTotalRecords(response.data.data.pageInfo.totalElements);
      setTableData(response.data.data.data);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "Có lỗi xảy ra");
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    handleFilter();
  }, []);

  return (
    <div className="max-w-fit flex flex-col relative">
      {isLoadingData && (
        <div className="absolute z-[80] flex justify-center items-center h-full w-full top-0 left-0">
          <MoonLoader color="#EE0033" />
        </div>
      )}
      <AdminOrderTableFilter
        filters={filter}
        onFilterChange={handleFilterChange}
        onFilter={handleFilter}
      />
      <div className="overflow-x-auto max-w-full mb-2 w-fit shadow-md rounded-sm mt-4">
        <table className="text-sm min-w-fit w-fit">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-3 py-4 text-left min-w-[200px] max-w-[200px]">
                Mã đơn
              </th>
              <th className="px-3 py-4 text-left min-w-[150px] max-w-[150px]">
                Người gửi
              </th>
              <th className="px-3 py-4 text-left min-w-[150px] max-w-[150px]">
                Địa chỉ lấy
              </th>
              <th className="px-3 py-4 text-left min-w-[150px] max-w-[150px]">
                Địa chỉ nhận
              </th>
              <th className="px-3 py-4 text-left min-w-[380px] max-w-[380px]">
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
                key={order.orderCode}
                style={{
                  backgroundColor: index % 2 == 1 ? "#F1F5F9" : "white",
                }}
                className="hover:!bg-red-100/50 cursor-pointer duration-100"
              >
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[200px] max-w-[200px]"
                  title={order.orderCode}
                >
                  {order.orderCode}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]"
                  title={order.senderName}
                >
                  {order.senderName}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]"
                  title={order.pickupAddress}
                >
                  {order.pickupAddress}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[150px] max-w-[150px]"
                  title={order.deliveryAddress}
                >
                  {order.deliveryAddress}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[380px] max-w-[380px]"
                  title={order.description}
                >
                  {order.description}
                </td>
                <td
                  className="px-2 py-3 truncate overflow-hidden whitespace-nowrap min-w-[120px] max-w-[120px]"
                  title={order.orderStatus}
                >
                  {order.orderStatus}
                </td>
                <td className="px-2 py-3 max-w-[250px] min-w-[250px]">
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() => handleAssignClick(order.orderCode, order.orderStatus)}
                      className="px-4 flex items-center cursor-pointer bg-green-700 hover:brightness-95 duration-100 text-white rounded-sm py-2"
                      style={{
                        backgroundColor:
                          order.orderStatus !== "Tạo đơn" ? "gray" : "",
                        cursor:
                          order.orderStatus !== "Tạo đơn" ? "default" : "",
                      }}
                    >
                      <AssignmentAddIcon fontSize="small" />
                      <span>Giao đơn</span>
                    </button>
                    <button
                      onClick={() => handleRowClick(order.orderCode)}
                      className="px-4 flex items-center cursor-pointer bg-blue-800 hover:brightness-95 duration-100 text-white rounded-sm py-2"
                    >
                      <AssignmentIcon fontSize="small" />
                      <span>Chi tiết</span>
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
          total={totalRecords}
          handlePageChange={(page) => handlePageChange(page)}
          handlePageSizeChange={(size) => handlePageSizeChange(size)}
        />
      </div>
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
