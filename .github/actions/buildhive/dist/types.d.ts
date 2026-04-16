export interface BuildHiveJobRequest {
    externalId: string;
    source: 'GITHUB_ACTIONS';
    repository: string;
    branch: string;
    commitSha: string;
    jobType: string;
    dockerImage: string;
    buildCommand: string;
    requiredOS?: string;
    requiredArch?: string;
    requiredMemoryGB?: number;
    requiredTags?: string[];
    environment: Record<string, string>;
    artifacts?: string[];
    timeout: number;
}
export interface BuildHiveJobResponse {
    id: string;
    status: JobStatus;
    queuedAt: string;
    assignedAt?: string;
    startedAt?: string;
    completedAt?: string;
    agentId?: string;
    exitCode?: number;
    errorMessage?: string;
    artifactUrls?: string[];
    actualDuration?: number;
    costSavings?: number;
}
export type JobStatus = 'QUEUED' | 'ASSIGNED' | 'RUNNING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'FALLBACK';
export interface BuildHiveConfig {
    url: string;
    apiKey: string;
    fallbackTimeout: number;
}
export interface ActionInputs {
    buildhiveUrl: string;
    apiKey: string;
    jobType: string;
    dockerImage: string;
    buildCommand: string;
    requiredOS?: string;
    requiredArch?: string;
    requiredMemory?: string;
    requiredTags?: string;
    timeout: string;
    fallbackTimeout: string;
    artifacts?: string;
    environment: string;
}
export interface ActionOutputs {
    jobId: string;
    status: JobStatus;
    duration?: number;
    costSavings?: number;
    agentId?: string;
    artifactUrls?: string[];
}
export interface WebSocketMessage {
    type: 'job:assigned' | 'job:started' | 'job:progress' | 'job:completed' | 'job:failed' | 'job:logs';
    jobId: string;
    data: any;
}
//# sourceMappingURL=types.d.ts.map