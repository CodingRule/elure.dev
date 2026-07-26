export const cves = [
	{
		id: 'CVE-2026-39903',
		advisory: 'PT-2026-57216',
		vendor: 'Simple Machines',
		product: 'Simple Machines Forum',
		published: '2026-07-10',
		summary:
			'An authorisation bypass in Sources/Actions/AttachmentApprove.php: a single-character operator error made the permission check always pass.',
		detail:
			'An authenticated low-privileged user could approve, reject, or delete any pending attachment on any board without holding the approve posts permission. The same flaw let users bypass the moderation queue for their own uploads, and enumerate or delete pending attachments belonging to other users.',
		affected: ['< 2.1.8', '< 3.0 Alpha 5'],
		fixed: ['2.1.8', '3.0 Alpha 5'],
	},
	{
		id: 'CVE-2026-39921',
		advisory: 'PT-2026-32033',
		vendor: 'GeoNode',
		product: 'GeoNode',
		published: '2026-04-10',
		summary:
			'Server-side request forgery through the document upload flow: the doc url parameter accepted arbitrary destinations.',
		detail:
			'Authenticated users holding document upload permission could force arbitrary outbound HTTP requests by supplying a malicious URL. Internal network targets, loopback and RFC1918 addresses, and cloud metadata services were all reachable, as the upload path applied neither private-IP filtering nor redirect validation.',
		affected: ['4.0 - 4.4.5', '5.0 - 5.0.2'],
		fixed: ['4.4.5', '5.0.2'],
	},
	{
		id: 'CVE-2026-39922',
		advisory: 'PT-2026-32034',
		vendor: 'GeoNode',
		product: 'GeoNode',
		published: '2026-04-10',
		summary: 'A second server-side request forgery affecting the same GeoNode releases.',
		detail:
			'Reported alongside CVE-2026-39921 and fixed in the same releases. Full technical detail is published in the CVE record and the accompanying advisory.',
		affected: ['4.0 - 4.4.5', '5.0 - 5.0.2'],
		fixed: ['4.4.5', '5.0.2'],
	},
] as const;

export const cveRecordUrl = (id: string) => `https://www.cve.org/CVERecord?id=${id}`;
