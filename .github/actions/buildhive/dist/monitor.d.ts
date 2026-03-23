export interface MonitorJobResult {
    success: boolean;
    status?: string;
    exitCode?: number;
    duration?: number;
    agentId?: string;
    artifacts?: string[];
    logs?: string;
    shouldFallback?: boolean;
    fallbackReason?: string;
    error?: string;
}
/**
 * Monitor job execution via polling
 */
export declare function monitorJob(serverUrl: string, apiKey: string, jobId: string, timeoutMinutes: number, fallbackTimeoutMinutes: number, enableFallback: boolean): Promise<MonitorJobResult>;
