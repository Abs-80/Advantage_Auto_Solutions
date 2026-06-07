export interface ServiceInfo {
  id: string;
  titleKey: string;
  descKey: string;
  iconName: string;
}

export const servicesData: ServiceInfo[] = [
  {
    id: "healthcheck",
    titleKey: "service.healthcheck.title",
    descKey: "service.healthcheck.desc",
    iconName: "Activity",
  },
  {
    id: "warranty",
    titleKey: "service.warranty.title",
    descKey: "service.warranty.desc",
    iconName: "ShieldCheck",
  },
  {
    id: "staffing",
    titleKey: "service.staffing.title",
    descKey: "service.staffing.desc",
    iconName: "Users",
  },
  {
    id: "sourcing",
    titleKey: "service.sourcing.title",
    descKey: "service.sourcing.desc",
    iconName: "Globe",
  }
];
