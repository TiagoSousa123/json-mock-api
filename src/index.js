// index.js
module.exports = () => {
	const data = {
		badge: {
			membershipPending: '4',
			notifications: '99',
			messages: '43',
		},
		users: [],
		membership: [],
		memberships: [],
	};
	// Create 1000 users
	for (let i = 0; i < 100; i++) {
		if (i <= 95) {
			data.memberships.push({
				id: `${i}`,
				profileId: i,
				name: 'james',
				userId: `sms|601a986ad950a870a415e0a9${i}`,
				igUsername: `john${i}`,
				igHandle: `dow${i}`,
				igAccountType: 'creator',
				igFollowersCount: 511 + i,
				igFollowsCount: 203000 + i,
				igMediaCount: 133100 + i,
				igMediaTotalComments: 130 + i,
				igMediaTotalLikes: 206 + i,
				igAvatar: 'https://i.pravatar.cc/303',
				igPortfolio: 'https://google.com',
				portfolioUrl: 'https://google.com',
				membershipStatus: 'pending',
				agency: 'Guacamole Models',
				igVerified: true,
				facebookConnected: true,
				referralCodeId: 'OK',
				creationDate: `2019-09-08T08:02:17-05:00`,
				approvedDate: `2014-09-08T08:02:17-05:00`,
			});
		} else {
			data.memberships.push({
				id: `${i}`,
				profileId: i,
				name: 'james',
				userId: `sms|601a986ad950a870a415e0a9${i}`,
				igUsername: `john${i}`,
				igHandle: `dow${i}`,
				igAccountType: 'creator',
				igFollowersCount: 511 + i,
				igFollowsCount: 203000 + i,
				igMediaCount: 133100 + i,
				igMediaTotalComments: 130 + i,
				igMediaTotalLikes: 206 + i,
				igAvatar: 'https://i.pravatar.cc/303',
				membershipStatus: 'approved',
				approved: `2020-01-01T13:53:24+01:00`,
				igVerified: true,
				igPortfolio: 'https://google.com',
				portfolioUrl: 'https://google.com',
				agency: 'Fresh Models',
				facebookConnected: true,
				referralCodeId: 'OK',
				creationDate: `2014-09-08T08:02:17-05:00`,
				approvedDate: `2014-09-08T08:02:17-05:00`,
			});
		}
	}

	return data;
};
