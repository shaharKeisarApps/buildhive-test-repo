import { BuildHiveJobRequest, BuildHiveJobResponse, BuildHiveConfig } from './types';
export declare class BuildHiveClient {
    private httpClient;
    private config;
    private ws?;
    constructor(config: BuildHiveConfig);
    submitJob(jobRequest: BuildHiveJobRequest): Promise<BuildHiveJobResponse>;
    waitForJobCompletion(jobId: string): Promise<BuildHiveJobResponse>;
    private connectWebSocket;
    private handleWebSocketMessage;
    getJobStatus(jobId: string): Promise<BuildHiveJobResponse>;
    cancelJob(jobId: string): Promise<void>;
    private cleanup;
    testConnection(): Promise<boolean>;
}
//# sourceMappingURL=buildhive.d.ts.map