import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const MESSAGE = "continue";

export default function (pi: ExtensionAPI) {
	pi.registerCommand("continue", {
		description: "Send a 'continue' user message",
		handler: async (_args, ctx) => {
			if (ctx.isIdle()) {
				pi.sendUserMessage(MESSAGE);
				return;
			}

			pi.sendUserMessage(MESSAGE, { deliverAs: "followUp" });
			ctx.ui.notify("Queued: continue", "info");
		},
	});
}
