/**
 * Recipe Detection Module for BuildHive GitHub Action
 *
 * Mirrors the agent's 15 built-in recipe detection rules so the Action can
 * auto-detect the right Docker image and build command based on files in
 * the workspace. Without this, Go jobs run in node:20, Python in node:20, etc.
 */
export interface DetectedRecipe {
    /** Canonical recipe name, e.g. "android-gradle" */
    name: string;
    /** Recommended build command for this project type */
    buildCommand: string;
    /** Docker image the agent should use */
    dockerImage: string;
    /** Tags the agent must have in order to run this recipe */
    requiredTags: string[];
    /** Environment variables the recipe needs */
    environment: Record<string, string>;
    /** 0-100 confidence that this is the right recipe */
    confidence: number;
}
/**
 * Detect the appropriate recipe for a project by scanning files in workDir.
 * Returns the best-matching recipe or `null` if nothing matched.
 */
export declare function detectRecipe(workDir: string): DetectedRecipe | null;
/**
 * Get the Docker image for a given recipe name.
 * Useful when the user explicitly specifies a recipe but not an image.
 */
export declare function getDockerImageForRecipe(recipeName: string): string | null;
//# sourceMappingURL=recipeDetector.d.ts.map