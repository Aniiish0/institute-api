export type HeartbeatResponse = {
  status: number;
  message: string;
};

// A post request should not contain an id.
export class HeartbeatService {
  public get(resource?: string): HeartbeatResponse {
    resource = resource ?? "app";
    let healthy = true;
    switch (resource.toUpperCase()) {
      case "APP":
        break;
      case "DATABASE":
        // TODO: Ping the resource and get its response
        break;
      default:
        return {
          status: 400,
          message: "No such resource found",
        };
    }
    if (!healthy) {
      return {
        status: 500,
        message: `${resource.toUpperCase()} is not healthy`,
      };
    }
    return {
      status: 200,
      message: `${resource.toUpperCase()} is healthy`,
    };
  }
}
