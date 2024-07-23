"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const heartbeat_1 = __importDefault(require("./routes/heartbeat"));
const app = (0, express_1.default)();
app.use("/heartbeat", heartbeat_1.default);
const port = parseInt(process.env.PORT || "3000");
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
//# sourceMappingURL=index.js.map