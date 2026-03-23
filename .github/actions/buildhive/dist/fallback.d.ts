export interface FallbackResult {
    success: boolean;
    error?: string;
}
/**
 * Execute the build command locally in GitHub Actions cloud runner
 * This is the fallback when BuildHive agents are unavailable or timeout
 */
export declare function handleFallback(buildCommand: string, workingDirectory: string): Promise<FallbackResult>;
