import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// placing order using COD Method
const placeOrder = async (req, res) => {
    
    try {

        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}});

        res.json({ success: true, msg: "Order placed successfully" });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, msg: error.message });
    }
}

// placing order using Stripe Method
const placeOrderStripe = async (req, res) => {
    
}

// placing order using Razorpay Method
const placeOrderRazorpay = async (req, res) => {

}

// all orders data for admin panel
const allOrders = async (req, res) => {
    
}

// user order data for frontend
const userOrder = async (req, res) => {
    
}

// update order status for admin panel
const updateStatus = async (req, res) => {
    
}

export { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrder, updateStatus}