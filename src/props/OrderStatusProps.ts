export type OrderStatusProps =
  | "Processing"
  | "Pending"
  | "Confirmed"
  | "Dispatched"
  | "Cancelled"
  | "Delivered";

export interface OrderDetailsProps {
  status: OrderStatusProps;
  cancelReason?: string;
  customerName: string;
  createdAt: Date;
  updatedAt: Date;
}
