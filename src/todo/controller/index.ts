import express, { Request, Response } from 'express';
import { TodoInstance } from '../model/index';
import { v4 as uuidv4 } from 'uuid';


class ToDoController {

    async readById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await TodoInstance.findOne({ where: { id } });
            return res.json(record);
        } catch (e) {
            return res.status(500).json({ msg: 'fail to read', route: '/read/:id' })
        }
    }

    async read(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await TodoInstance.findOne({ where: { id } });
            return res.json(record);
        } catch (e) {
            return res.status(500).json({ msg: 'fail to read', route: '/read/:id' })
        }
    }


    async create(req: Request, res: Response) {
        const id = uuidv4();
        try {
            const record = await TodoInstance.create({ ...req.body, id });
            return res.json({ record, msg: 'Succesfully create todo' })
        } catch (e) {
            return res.json({ msg: "fail to create", status: 500, route: '/create' })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await TodoInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ msg: "Can not find existing record" });
            }

            const updatedRecord = await record.update({ completed: !record.getDataValue("completed") });

            return res.json({ record: updatedRecord })
        } catch (e) {
            return res.status(500).json({ msg: 'fail to read', route: '/read/:id' })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await TodoInstance.findOne({ where: { id } });
            if (!record) {
                return res.json({ msg: "Can not find existing record" });
            }

            const deletedRecord = await record.destroy();
            return res.json({ record: deletedRecord });
        } catch (e) {
            return res.status(500).json({ msg: 'fail to read', route: '/read/:id' })
        }
    }
}

export default new ToDoController();