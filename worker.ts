import { expose } from "comlink";
import runBigTask from "./utils/task"

const worker = {runBigTask};
export type RunBigTaskWorker = typeof worker;
expose(worker);