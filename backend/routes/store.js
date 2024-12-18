import express from "express"

import Buyitems from "../controller/store/purchase-item.js"
import UserCredit from "../controller/store/credit.js";


const router = express.Router();



router.post("/PurchaseItems",Buyitems) //http://localhost:3000/api/items/PurchaseItems

router.get('/usercredit/:userId', UserCredit); //http://localhost:3000/api/items/usercredit/1


 





export default router;