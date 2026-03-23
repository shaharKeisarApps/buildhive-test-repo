/**
 * Recipe Detection Module for BuildHive GitHub Action
 *
 * Mirrors the agent's 15 built-in recipe detection rules so the Action can
 * submit accurate recipe metadata (name, tags, environment, docker image)
 * alongside the job payload — without importing from the agent codebase.
 */
export interface DetectedRecipe {
    /** Canonical recipe name, e.g. "android-gradle" */
    name: string;
    /** Recommended build command for this project type */
    buildCommand: string;
    /** Docker image the agent should use (undefined for native-only recipes like ios-xcode) */
    dockerImage?: string;
    /** Tags the agent must have in order to run this recipe */
    requiredTags: string[];
    /** Environment variables the recipe needs */
    environment: Record<string, string>;
    /** 0-100 confidence that this is the right recipe */
    confidence: number;
}
/**
 * Detect the appropriate recipe for a project by scanning files.
 * Mirrors the agent's recipe detection logic but runs inside GitHub Actions.
 *
 * Returns the best-matching recipe or `null` if nothing matched.
 */
export declare function detectRecipe(workDir: string): Promise<DetectedRecipe | null>;
/**
 * Auto-detect the build command for a project.
 * Uses recipe detection first, then falls back to the legacy 4-system check.
 */
export declare function detectBuildCommand(workDir: string): Promise<string>;
