export var AppLinks: Array<AppLink> = [
  {icon: "icon-user", title: "Me", route: ['/Home']},
  {icon: "icon-musiclist", title: "Activity", route: ['/Home']},
  {icon: "icon-rocket", title: "Todos", route: ['/TaskManagerInbox']},
  {icon: "icon-chat", title: "Discussions", route: ['/Discussion']},
  {icon: "icon-copy-file", title: "Files", route: ['/Home']},
  {icon: "icon-users", title: "People", route: ['/Home']}
];

export var TodoLinks: Array<AppLink> = [
  {icon: "icon-appbar-page-corner-bookmark", title: "Inbox", route: ['/TaskManagerInbox']},
  {icon: "icon-appbar-calendar-dollar", title: "Today", route: ['/Home']},
  {icon: "icon-appbar-calendar-week", title: "Next 7 days", route: ['/Home']}
];