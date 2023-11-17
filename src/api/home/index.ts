//统一管理首页模块的接口
import request from "@/utils/request"

import type { HospitalResponseData, HospitalInfo } from "./type"

enum API {
  //获取已有医院数据的接口地址
  HOSPITAL_URL = '/hosp/hospital/',
  SEARCH_URL = '/hosp/hospital/findByHosname/'
}

//获取医院数据
export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`)

//根据关键字获取医院数据
export const reqHospitalSearch = (hosname: string) => request.get<any, HospitalInfo>(API.SEARCH_URL + hosname)




















