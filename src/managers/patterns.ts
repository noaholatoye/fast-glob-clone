/**
 * Matches a sequence of two or more consecutive slashes, excluding the first two slashes at the beginning of the string.
 * The latter is due to the presence of the device path at the beginning of the UNC path.
 * @todo rewrite to negative lookbehind with the next major release.
 */
const DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;

export function transform(patterns: string[]): string[] {
	return patterns.map((pattern) => removeDuplicateSlashes(pattern));
}

/**
 * This package only works with forward slashes as a path separator.
 * Because of this, we cannot use the standard `path.normalize` method, because on Windows platform it will use of backslashes.
 */
export function removeDuplicateSlashes(pattern: string): string {
	return pattern.replace(DOUBLE_SLASH_RE, '/');
}
