export type Ledger = {
  id: string;
  affiliatedInstitution: string; //所属机构 →
  affiliatedRegion: string; //所属区域 →
  regionalLocation: string; //区域位置 →
  systemPlatform: string; //设备系统 →
  deviceName: string; //设备名称 →
  deviceType: string; //设备类型 →
  deviceID: string; //设备类型 →
  detailedLocation: string; //详细位置
  manufacturer: string; //厂家
  deviceModel: string; //设备型号 →
  isIPDevice: boolean; //是否为IP类设备 →
  ipAddress?: string; //IP地址 →
  macAddress?: string; //mac地址 →
  gatewayAddress?: string; //网关地址 →
  direction?: string; //方向
  operationalStatus: string; //使用状态 →
  serviceStatus: string; //服役状态 →
  resourceType: string; //资源类型 →
  resourceStatus: string; //资源状态 →
  deploymentDate: string; //投用时间 →
  quantity?: number; //数量
  defectLiabilityPeriod: string; //缺陷责任期 →
};
