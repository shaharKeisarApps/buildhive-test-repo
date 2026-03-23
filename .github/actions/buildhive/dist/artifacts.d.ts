export interface DownloadArtifactsResult {
    success: boolean;
    downloadedPaths?: string[];
    error?: string;
}
/**
 * Download artifacts from BuildHive server and upload to GitHub Actions
 */
export declare function downloadArtifacts(artifactUrls: string[]): Promise<DownloadArtifactsResult>;
