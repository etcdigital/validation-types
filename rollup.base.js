import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import mainPkg from "./package.json";

export const build = function (pkg) {
	return {
		input: pkg.source,
		output: [
			{
				format: "esm",
				file: pkg.module,
				sourcemap: false,
				plugins: [terser()],
				exports: "named",
			},
			{
				format: "cjs",
				file: pkg.main,
				sourcemap: false,
				plugins: [terser()],
				exports: "named",
			},
			{
				name: pkg["umd:name"] || pkg.name,
				format: "umd",
				file: pkg.unpkg,
				sourcemap: false,
				plugins: [terser()],
				exports: "named",
			},
		],
		external: [
			...require("module").builtinModules,
			...Object.keys(pkg.dependencies || {}),
			...Object.keys(pkg.peerDependencies || {}),
			...Object.keys(mainPkg.dependencies || {}),
			...Object.keys(mainPkg.peerDependencies || {}),
			"react",
		],
		plugins: [
			nodeResolve(),
			typescript({
				useTsconfigDeclarationDir: true,
			}),
		],
	};
};
