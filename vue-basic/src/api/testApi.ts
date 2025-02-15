import {defHttp} from "../utils/http/axios.ts";
import {TestEntity} from "@/api/testModel.ts";

const BASE_URL = "api/test/test";


export function getTest(id:string) {
    return defHttp.get<TestEntity>({
        url: `${BASE_URL}/selectByIdTest`,
        params: {
            id: id
        }
    });
}