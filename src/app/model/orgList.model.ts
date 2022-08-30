export interface OrganizationList {
    organizationCode: string; name: string, facilities:
      Array<
        {
          facilityCode: string,
          organizationCode: string,
          name: string,
          version: string,
          goLiveDate: string,
          healthUrl: string
        }
      >
  }