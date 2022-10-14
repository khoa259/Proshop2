import Category from '../model/category.js';

export const list = async (req, res) => {
	try {
		const category = await Category.find().exec();
		res.json(category);
	} catch (error) {
		res.status(400).json({
			error: "Không có danh muc"
		})
	}
}
export const create = async (req, res) => {
	try {
		const category = await new Category(req.body).save();
		res.json(category);
	} catch (error) {
		res.status(400).json({
			error: "Thêm không thành công"
		})
	}
}
export const read = async (req, res) => {
	try {
		const category = await Category.findOne({ _id: req.params.id }).exec();
		res.json({
			 category
		});
	} catch (error) {
		res.status(400).json({
			error: "tim không thành công"
		})
	}
}
export const update = async (req, res) => {
	try {
		const category = await Category.findByIdAndUpdate({ _id: req.params.id },req.body,{new:true}).exec();
		res.json({
			 category
        });
	} catch (error) {
		res.status(400).json({
			error: "tim không thành công"
		})
	}
}
export const remove = async (req, res) => {
	try {
		const category = await Category.findOneAndDelete({ _id: req.params.id }).exec();
		res.json({
			 category
		});
	} catch (error) {
		res.status(400).json({
			error: "tim không thành công"
		})
	}
}