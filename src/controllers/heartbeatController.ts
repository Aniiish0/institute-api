import { Controller, Get, Path, Route } from "tsoa";
import {
  HeartbeatService,
  HeartbeatResponse,
} from "../services/heartbeatService";

@Route("health-check")
export class HeartbeatController extends Controller {
  @Get()
  public async getHeartbeat(): Promise<HeartbeatResponse> {
    const response = new HeartbeatService().get();
    this.setStatus(response.status);
    return response;
  }

  @Get("{resource}")
  public async getResourceHeartbeat(
    @Path() resource?: string,
  ): Promise<HeartbeatResponse> {
    const response = new HeartbeatService().get(resource);
    this.setStatus(response.status);
    return response;
  }
}
