import Product from "../models/product.js";

export const key = async (req, res) => {
	let data = await Product.find(
		{
			"$or": [
				{ name: { $regex: req.params.key } }
			]
		})
	res.json(data)
}