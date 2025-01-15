export type LanguageStructure = {
  general: {
  access_token: Promise<{
  "1": string;
  "2": string;
}>;
  buttons: Promise<{
  userID: string;
  supportServer: string;
  customise: string;
  overview: string;
  serverlog: string;
  dashboard: string;
  pro: string;
}>;
  channel_types: Promise<{
  "0": string;
  "2": string;
  "4": string;
  "5": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
}>;
  channel_update_types: Promise<{
  none: string;
}>;
  command_responses: Promise<{
  disable: string;
  enable: string;
  "error-401-0": string;
  "error-401-1-type-0": string;
  "error-401-1-type-1": string;
  "error-401-1-type-2": string;
  "error-401-1-type-3": string;
  "error-403-0": string;
  "error-403-1-type-0": string;
  "error-403-1-type-1": string;
  "error-403-1-type-2": string;
  "error-403-1-type-3": string;
  "error-404-0": string;
  "error-404-1": string;
  "error-405-0": string;
  "error-405-1": string;
  "error-406-0": string;
  "error-407-0": string;
  "error-409-0-type-0": string;
  "error-409-0-type-1": string;
  "error-409-0-type-2": string;
  "error-409-0-type-3": string;
  "error-429-0": string;
  "error-429-1": string;
  "error-430-0": string;
  "error-430-1": string;
  "error-431-0": string;
  "error-431-1": string;
  "error-432-0": string;
  "error-432-1": string;
  "error-433-0": string;
  "error-433-1": string;
  "error-434-0": string;
  "error-434-1": string;
  "error-435-0": string;
  "error-435-1": string;
  "error-try-help-again": string;
  "error-no-modlog": string;
  "error-invalid-log": string;
  "error-timeout-period-too-long-0": string;
  "error-timeout-period-too-long-1": string;
  "response-ban": string;
  "response-kick": string;
  "response-mute": string;
  "response-unmute": string;
  "response-unban": string;
  "response-purge": string;
  "response-customise-dash": string;
  "response-customise-1": string;
  "response-customise-2": string;
  "response-customise-3": string;
  "response-customise-4": string;
  "response-case-updated": string;
  "response-debug": string;
  "response-status-enabled": string;
  "response-status-disabled": string;
  "target0-command": string;
  "target1-command": string;
  "message0-command": string;
  "executor0-command": string;
  "executor1-command": string;
  "channel0-command": string;
  "channel1-command": string;
  "serverlog-web-promote": string;
  "serverlog-select": string;
  "serverlog-unset": string;
  "serverlog-set": string;
  "serverlog-setchannel": string;
  "setserverlog-confirm0-set": string;
  "setserverlog-confirm0-unset": string;
  "setserverlog-confirm1-set": string;
  "setserverlog-confirm1-unset": string;
  "setserverlog-confirm0-options-set": string;
  "setserverlog-confirm0-options-unset": string;
  "setserverlog-confirm0-options-stoplog": string;
  "setserverlog-confirm1-options-set": string;
  "setserverlog-confirm1-options-unset": string;
  "setserverlog-confirm1-options-stoplog": string;
  "setserverlog-type-members-0": string;
  "setserverlog-type-members-1": string;
  "setserverlog-type-actions-0": string;
  "setserverlog-type-actions-1": string;
  "setserverlog-type-text-0": string;
  "setserverlog-type-text-1": string;
  "setserverlog-type-voice-0": string;
  "setserverlog-type-voice-1": string;
  "setserverlog-type-files-0": string;
  "setserverlog-type-files-1": string;
  "setserverlog-type-server-0": string;
  "setserverlog-type-server-1": string;
  "setserverlog-type-roles-0": string;
  "setserverlog-type-roles-1": string;
  "setserverlog-type-channels-0": string;
  "setserverlog-type-channels-1": string;
  "setserverlog-type-modlogs-0": string;
  "setserverlog-type-modlogs-1": string;
  "setserverlog-type-quark-0": string;
  "setserverlog-type-quark-1": string;
  "setserverlog-spoilers": string;
  "setserverlog-spoilers-0": string;
  "setserverlog-enable-status-updates": string;
  "setserverlog-enable-status-updates-desc": string;
  "setserverlog-enable-status-updates-desc-1": string;
  "setserverlog-check-permissions": string;
  "festive-title": string;
  "festive-claim": string;
  "help-overview-website-description": string;
  "help-overview-inventory-description": string;
  "help-overview-view-inv": string;
  "help-overview-help": string;
  "help-overview-website": string;
  "help-overview-serverlog": string;
  "help-overview-modlog": string;
  "help-overview-commands": string;
  "help-overview-language": string;
  "help-overview-premium": string;
  "help-overview-inventory": string;
  "help-overview-channel-isset": string;
  "help-overview-channel-isnotset": string;
  "help-overview-view-options": string;
  "help-overview-view-options-and-statuses": string;
  "help-overview-view-all-commands": string;
  "help-overview-change-channel": string;
  "help-overview-manage-premium": string;
  "language-set": string;
  "help-serverlog-help": string;
  "help-serverlog-0": string;
  "help-serverlog-1": string;
  "help-serverlog-2": string;
  "help-serverlog-0-desc": string;
  "help-serverlog-1-desc": string;
  "help-serverlog-2-desc": string;
  "help-serverlog-2-on": string;
  "help-serverlog-2-off": string;
  "help-commands-help": string;
  "help-commands-moderation": string;
  "help-commands-tags": string;
  "help-commands-notes": string;
  "help-commands-other": string;
  "help-notes-help": string;
  "help-tags-help": string;
  "help-info": string;
  "need-to-vote-title": string;
  "need-to-vote": string;
  "need-to-vote-footer": string;
  "initialreactors-expired": string;
  "initialreactors-notfound": string;
  configCommand: {
  title: string;
  selection: string;
  serverLogDesc: string;
  notSet: string;
  selectACategory: string;
  overview: string;
  formats: {
  log_channels: string;
  configurable_events: string;
};
  categories: {
  categoryMembers: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
};
  categoryText: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
};
  categoryVoice: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
};
  categoryActions: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
};
  categoryChannels: {
  title: string;
  description: string;
  resetButton: string;
};
  categoryServer: {
  title: string;
  description: string;
  resetButton: string;
};
  categoryRoles: {
  title: string;
  description: string;
  resetButton: string;
};
  categoryModlog: {
  title: string;
  description: string;
  resetButton: string;
};
  overview: {
  title: string;
  description: string;
};
  categoryQuark: {
  title: string;
  description: string;
  resetButton: string;
};
  categoryFiles: {
  title: string;
  description: string;
};
};
  selectChannel: string;
  all: string;
  resetChannel: string;
  selectLogType: string;
  resetLogChannel: string;
};
  "help-modify-tags-description": string;
}>;
  emoji_update_types: Promise<{
  none: string;
}>;
  gui_constants: Promise<{
  channelModificationTypes: {
  name: string;
  type: string;
  position: string;
  topic: string;
  rate_limit_per_user: string;
  parent_id: string;
  bitrate: string;
  user_limit: string;
  rtc_region: string;
  nsfw: string;
};
  roleModificationTypes: {
  name: string;
  color: string;
  hoist: string;
  managed: string;
  mentionable: string;
  unicode_emoji: string;
};
  emojiModificationTypes: {
  name: string;
};
  guildModificationTypes: {
  name: string;
  description: string;
  system_channel_id: string;
  rules_channel_id: string;
  mfa_level: string;
  verification_level: string;
  default_message_notifications: string;
  explicit_content_filter: string;
  nsfw_level: string;
  premium_progress_bar_enabled: string;
};
  webhookModificationTypes: {
  name: string;
  channel_id: string;
};
}>;
  guild_update_types: Promise<{
  none: string;
  verification_level: {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
};
  default_message_notifications: {
  "0": string;
  "1": string;
};
  explicit_content_filter: {
  "0": string;
  "1": string;
  "2": string;
};
  nsfw_level: {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};
  premium_progress_bar_enabled: {
  true: string;
  false: string;
};
}>;
  ignore_options: Promise<{
  ignoreTargets: string;
  ignoreExecutors: string;
  specificMessageContent: string;
  ignoreChannels: string;
  ignoreBotExecutors: string;
  ignoreBotTargets: string;
  ignoreExecutorRoles: string;
  ignoreTargetRoles: string;
  ignoreCategories: string;
  activeIgnore: string;
}>;
  log_categories: Promise<{
  serverEvents: string;
  serverActions: string;
  textEvents: string;
  voiceEvents: string;
  fileEvents: string;
  generalEvents: string;
  roleEvents: string;
  channelEvents: string;
  quarkEvents: string;
  modLog: string;
  main: string;
}>;
  log_formats: Promise<{
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
}>;
  permissions: Promise<{
  CREATE_INSTANT_INVITE: string;
  KICK_MEMBERS: string;
  BAN_MEMBERS: string;
  ADMINISTRATOR: string;
  MANAGE_CHANNELS: string;
  MANAGE_GUILD: string;
  ADD_REACTIONS: string;
  VIEW_AUDIT_LOG: string;
  PRIORITY_SPEAKER: string;
  STREAM: string;
  VIEW_CHANNEL: string;
  SEND_MESSAGES: string;
  SEND_TTS_MESSAGES: string;
  MANAGE_MESSAGES: string;
  EMBED_LINKS: string;
  ATTACH_FILES: string;
  READ_MESSAGE_HISTORY: string;
  MENTION_EVERYONE: string;
  USE_EXTERNAL_EMOJIS: string;
  VIEW_GUILD_INSIGHTS: string;
  CONNECT: string;
  SPEAK: string;
  MUTE_MEMBERS: string;
  DEAFEN_MEMBERS: string;
  MOVE_MEMBERS: string;
  USE_VAD: string;
  CHANGE_NICKNAME: string;
  MANAGE_NICKNAMES: string;
  MANAGE_ROLES: string;
  MANAGE_WEBHOOKS: string;
  MANAGE_EMOJIS: string;
  USE_SLASH_COMMANDS: string;
  REQUEST_TO_SPEAK: string;
  MANAGE_THREADS: string;
  USE_PUBLIC_THREADS: string;
  USE_PRIVATE_THREADS: string;
  USE_EXTERNAL_STICKERS: string;
  SEND_MESSAGES_IN_THREADS: string;
  USE_EMBEDDED_ACTIVITIES: string;
  MODERATE_MEMBERS: string;
  VIEW_CREATOR_MONETIZATION_ANALYTICS: string;
  USE_SOUNDBOARD: string;
  CREATE_GUILD_EXPRESSIONS: string;
  CREATE_EVENTS: string;
  USE_EXTERNAL_SOUNDS: string;
  SEND_VOICE_MESSAGES: string;
  SEND_POLLS: string;
}>;
  role_update_types: Promise<{
  enabled: string;
  disabled: string;
  none: string;
}>;
  time: Promise<{
  second: string;
  "second-plural": string;
  minute: string;
  "minute-plural": string;
  hour: string;
  "hour-plural": string;
  day: string;
  "day-plural": string;
  week: string;
  "week-plural": string;
  month: string;
  "month-plural": string;
  year: string;
  "year-plural": string;
}>;
  tags_responses: Promise<{
  "tags-help-description": string;
  "create-success": string;
  "edit-success": string;
  "delete-success": string;
  "notags-list-command": string;
  "tags-list-title": string;
  "tags-embedoptions-title": string;
  "tags-usageoptions-title": string;
  "tags-display-title": string;
  "tag-error-noname-0": string;
  "tag-error-noname-1": string;
  "tag-error-nocontent-0": string;
  "tag-error-nocontent-1": string;
  "tag-error-invalidname-0": string;
  "tag-error-invalidname-1": string;
  "tag-error-doesnotexist-0": string;
  "tag-error-doesnotexist-1": string;
  "tag-error-alreadyexists-0": string;
  "tag-error-alreadyexists-1": string;
  "tag-error-limitreached-0": string;
  "tag-error-limitreached-1": string;
  "tag-createdby": string;
}>;
};
  slash_commands: {
  ban: Promise<{
  name: string;
  description: string;
  commandOptions: {
  userOption: {
  name: string;
  description: string;
};
  reasonOption: {
  name: string;
  description: string;
};
  deleteMessageDaysOption: {
  name: string;
  description: string;
};
};
}>;
  commands: Promise<{
  name: string;
  description: string;
}>;
  config: Promise<{
  name: string;
  description: string;
  commandOptions: {
  format: {
  name: string;
  description: string;
  choices: {
  log_channels: {
  label: string;
};
  configurable_events: {
  label: string;
};
};
};
};
}>;
  dashboard: Promise<{
  name: string;
  description: string;
}>;
  debug: Promise<{
  name: string;
  description: string;
  commandOptions: {
  shareOption: {
  name: string;
  description: string;
};
};
}>;
  export: Promise<{
  name: string;
  description: string;
  commandOptions: {
  startOption: {
  name: string;
  description: string;
};
  endOption: {
  name: string;
  description: string;
};
  formatOption: {
  name: string;
  description: string;
  choices: {
  json: {
  name: string;
};
  pretty: {
  name: string;
};
};
};
};
}>;
  help: Promise<{
  name: string;
  description: string;
  commandOptions: {
  overviewOption: {
  name: string;
  description: string;
};
  serverlogOption: {
  name: string;
  description: string;
};
};
}>;
  initialReactor: Promise<{
  name: string;
}>;
  invite: Promise<{
  name: string;
  description: string;
}>;
  kick: Promise<{
  name: string;
  description: string;
  commandOptions: {
  userOption: {
  name: string;
  description: string;
};
  reasonOption: {
  name: string;
  description: string;
};
};
}>;
  language: Promise<{
  name: string;
  description: string;
  commandOptions: {
  languageOption: {
  name: string;
  description: string;
};
};
}>;
  logging: Promise<{
  name: string;
  description: string;
}>;
  mute: Promise<{
  name: string;
  description: string;
  commandOptions: {
  userOption: {
  name: string;
  description: string;
};
  timeOption: {
  name: string;
  description: string;
};
  typeOption: {
  name: string;
  description: string;
  choices: {
  minutes: {
  name: string;
};
  hours: {
  name: string;
};
  days: {
  name: string;
};
};
};
  reasonOption: {
  name: string;
  description: string;
};
};
}>;
  ping: Promise<{
  name: string;
  description: string;
}>;
  premium: Promise<{
  name: string;
  description: string;
}>;
  privacy: Promise<{
  name: string;
  description: string;
}>;
  purge: Promise<{
  name: string;
  description: string;
  commandOptions: {
  countOption: {
  name: string;
  description: string;
};
};
}>;
  reason: Promise<{
  name: string;
  description: string;
  commandOptions: {
  caseOption: {
  name: string;
  description: string;
};
  reasonOption: {
  name: string;
  description: string;
};
};
}>;
  serverlog: Promise<{
  name: string;
  description: string;
  commandOptions: {
  channelOptionAllChannel: {
  name: string;
  description: string;
};
  channelOptionAll: {
  name: string;
  description: string;
};
  channelOption: {
  name: string;
  description: string;
};
  targetUserOption: {
  name: string;
  description: string;
};
  ignoreOptionTarget: {
  name: string;
  description: string;
};
  messageContentOption: {
  name: string;
  description: string;
};
  ignoreOptionMessage: {
  name: string;
  description: string;
};
  executorUserOption: {
  name: string;
  description: string;
};
  ignoreOptionExecutor: {
  name: string;
  description: string;
};
  ignoreOptionsChannelChannel: {
  name: string;
  description: string;
};
  ignoreOptionChannel: {
  name: string;
  description: string;
};
  ignoreOption: {
  name: string;
  description: string;
};
  spoilersOption: {
  name: string;
  description: string;
};
};
}>;
  tags: Promise<{
  name: string;
  description: string;
  commandOptions: {
  sendOptionTag: {
  name: string;
  description: string;
};
  sendOptionUser: {
  name: string;
  description: string;
};
  sendOption: {
  name: string;
  description: string;
};
  editOptionTag: {
  name: string;
  description: string;
};
  editOptionText: {
  name: string;
  description: string;
};
  editOptionColour: {
  name: string;
  description: string;
};
  editOptionImage: {
  name: string;
  description: string;
};
  editOption: {
  name: string;
  description: string;
};
  createOptionTag: {
  name: string;
  description: string;
};
  createOptionText: {
  name: string;
  description: string;
};
  createOption: {
  name: string;
  description: string;
};
  deleteOptionTag: {
  name: string;
  description: string;
};
  deleteOption: {
  name: string;
  description: string;
};
  listOption: {
  name: string;
  description: string;
};
  helpOption: {
  name: string;
  description: string;
};
};
}>;
  unban: Promise<{
  name: string;
  description: string;
  commandOptions: {
  userOption: {
  name: string;
  description: string;
};
  reasonOption: {
  name: string;
  description: string;
};
};
}>;
  unmute: Promise<{
  name: string;
  description: string;
  commandOptions: {
  userOption: {
  name: string;
  description: string;
};
  reasonOption: {
  name: string;
  description: string;
};
};
}>;
};
  standard: {
  channelEvents: Promise<{
  channelCreated: {
  title: string;
  description: string;
  descriptionWithCategory: string;
};
  channelDeleted: {
  title: string;
  description: string;
  channel: string;
};
  channelUpdated: {
  title: string;
  description: string;
};
  channelOverwriteCreate: {
  title: string;
  description: string;
};
  channelOverwriteDelete: {
  title: string;
  description: string;
};
  channelOverwriteUpdate: {
  title: string;
  description: string;
  newPermissions: string;
  viewFullNewPermissions: string;
};
  webhookCreate: {
  title: string;
  description: string;
};
  webhookDelete: {
  title: string;
  description: string;
};
  webhookUpdate: {
  title: string;
  description: string;
};
  webhookAvatarUpdate: {
  title: string;
  description: string;
  description_added: string;
  description_removed: string;
  linkToOldAvatar: string;
  linkToNewAvatar: string;
};
  statusChannelFollowed: {
  title: string;
  description: string;
};
  statusChannelUnfollowed: {
  title: string;
  description: string;
};
  statusChannelUpdated: {
  title: string;
  description: string;
};
}>;
  generalEvents: Promise<{
  serverModified: {
  title: string;
  description: string;
};
  serverIconUpdated: {
  title: string;
  description: string;
  description_added: string;
  description_removed: string;
  linkToOldIcon: string;
  linkToNewIcon: string;
};
  serverBoostAdd: {
  title: string;
  description: string;
  description_noUser: string;
  description_withTier: string;
  description_withTier_noUser: string;
  none: string;
};
  serverBoostRemove: {
  title: string;
  description: string;
  description_noUser: string;
  description_withTier: string;
  description_withTier_noUser: string;
  none: string;
};
}>;
  modlog: Promise<{
  moderator: string;
  user: string;
  reason: string;
  case: string;
  noReason: string;
  noReasonBrief: string;
  ban: string;
  unban: string;
  kick: string;
  mute: string;
  unmute: string;
  timeoutEnds: string;
  editReason: string;
  reasonModal: {
  label: string;
  placeholder: string;
  title: string;
};
}>;
  quarkEvents: Promise<{
  serverlogChannelUpdate: {
  title: string;
  description_set: string;
  description_category_disable: string;
  description_unset: string;
};
  serverlogOptionsUpdate: {
  title: string;
  description: string;
  pluralkitSupport: string;
  spoilers: string;
  buttons: string;
  formatType: string;
};
  serverlogLogUpdate: {
  title: string;
  description: string;
  enabled: string;
  logFormat: string;
  logChannel: string;
  colour: string;
  ignoreBotExecutors: string;
  ignoreBotTargets: string;
  activeIgnore: string;
};
  serverlogIgnoreUpdate: {
  title: string;
  description_set: string;
  description_unset: string;
  description_added: string;
  description_removed: string;
};
  languageUpdate: {
  title: string;
  description: string;
};
  reset: {
  title: string;
  description: string;
};
  tagAdded: {
  title: string;
  description: string;
};
  tagUpdated: {
  title: string;
  description: string;
};
  tagDeleted: {
  title: string;
  description: string;
};
  tokenAdded: {
  title: string;
  description: string;
  unique_id: string;
  revoke: string;
};
  tokenRevoked: {
  title: string;
  description: string;
};
}>;
  roleEvents: Promise<{
  roleCreated: {
  title: string;
  description: string;
};
  roleDeleted: {
  title: string;
  description: string;
  role: string;
  linkToRoleIcon: string;
};
  roleUpdated: {
  title: string;
  description: string;
};
  rolePermissionsUpdate: {
  title: string;
  description: string;
  newPermissions: string;
  oldPermissions: string;
  viewFullNewPermissions: string;
  viewFullOldPermissions: string;
};
  roleIconUpdate: {
  title: string;
  description: string;
  description_added: string;
  description_removed: string;
  linkToOldIcon: string;
  linkToNewIcon: string;
};
}>;
  serverActions: Promise<{
  inviteCreate: {
  title: string;
  description_withInviter: string;
  description_withoutInviter: string;
  expires: string;
  never: string;
  maxUses: string;
  none: string;
};
  inviteDelete: {
  title: string;
  description_withExecutor: string;
  description_withoutExecutor: string;
  used: string;
  created: string;
  none: string;
};
  emojiCreated: {
  title: string;
  description: string;
};
  emojiDeleted: {
  title: string;
  description: string;
  emoji: string;
};
  emojiUpdated: {
  title: string;
  description: string;
};
  serverEventCreate: {
  title: string;
  description_withChannel: string;
  description_withoutChannel: string;
  eventDescription: string;
  location: string;
  starts: string;
  image: string;
};
  serverEventDelete: {
  title: string;
  description: string;
  linkToEventImage: string;
};
  serverEventUpdate: {
  title: string;
  description: string;
  newEventDescription: string;
  newLocation: string;
  newChannel: string;
  linkToEventImage: string;
  newImage: string;
};
}>;
  serverEvents: Promise<{
  members: string;
  userJoined: {
  title: string;
  description: string;
  noAvatar: string;
  newAccount: string;
  noBadges: string;
  warning: string;
  accountCreated: string;
  invite: string;
  createdBy: string;
  ban: string;
  info: string;
  rejoined: string;
};
  userLeft: {
  title: string;
  description: string;
  joined: string;
  roles: string;
  serverProfilePicture: string;
};
  botAdded: {
  title: string;
  description: string;
  descriptionne: string;
};
  botRemoved: {
  title: string;
  description: string;
  descriptionne: string;
};
  nicknameUpdate: {
  title: string;
  description: string;
  setNick: string;
  nickRemoved: string;
  changedBy: string;
};
  memberRoleAdd: {
  title: string;
  title_multiple: string;
  description: string;
  description_multiple: string;
  givenBy: string;
  roles: string;
};
  memberRoleRemove: {
  title: string;
  title_multiple: string;
  description: string;
  description_multiple: string;
  removedBy: string;
  roles: string;
};
  memberPrune: {
  title: string;
  description: string;
};
  avatarUpdate: {
  title: string;
  description: string;
  description_added: string;
  description_removed: string;
  changedBy: string;
  linkToOldAvatar: string;
  linkToNewAvatar: string;
};
}>;
  textEvents: Promise<{
  polls: {
  poll: string;
  pollDescriptor: string;
  status: string;
  ended: string;
  notEnded: string;
  multiselect: string;
  enabled: string;
  disabled: string;
  ends: string;
  vote: string;
  votes: string;
  noResponses: string;
  pollDeleted: string;
};
  messageDeleted: {
  title: string;
  author: string;
  channel: string;
  deletedBy: string;
  jumpToContext: string;
  warning: string;
  linksToEmojis: string;
  linksToFiles: string;
  inviteDetected: string;
  ghostpingDetected: string;
  file: string;
  files: string;
  fileExpired: string;
  filesExpired: string;
  sticker: string;
  noContent: string;
  embed: string;
  thread: string;
  initialReactor: string;
};
  messagesBulkDeleted: {
  title: string;
  deletedBy: string;
  channel: string;
  more: string;
  uncachedUser: string;
  uncachedChannel: string;
  uncachedMessage: string;
  embed: string;
  errorFile: string;
  errorText: string;
};
  messageUpdate: {
  title: string;
  author: string;
  channel: string;
  jumpToMessage: string;
  afterEdit: string;
  diff: string;
  diffError: string;
  cannotRetrieveOriginal: string;
  noContent: string;
  thread: string;
};
  attachmentDeleted: {
  title: string;
};
  messagePin: {
  title: string;
  description: string;
};
  messageUnpin: {
  title: string;
  description: string;
};
  threadCreate: {
  thread: string;
  channel: string;
  jumpToContext: string;
  title: string;
  description: string;
};
  threadDelete: {
  thread: string;
  channel: string;
  title: string;
  description: string;
};
  messageReactionRemove: {
  title: string;
  description: string;
  emoji: string;
  linkToEmoji: string;
  jumpToMessage: string;
};
}>;
  voiceEvents: Promise<{
  streamStart: {
  title: string;
  description: string;
};
  streamStop: {
  title: string;
  description: string;
};
  videoStart: {
  title: string;
  description: string;
};
  videoStop: {
  title: string;
  description: string;
};
  voiceSwitch: {
  title: string;
  description: string;
};
  voiceMove: {
  title: string;
  description: string;
  movedBy: string;
};
  voiceJoin: {
  title: string;
  description: string;
};
  voiceLeave: {
  title: string;
  description: string;
  joined: string;
  joinedValue: string;
};
  voiceDisconnect: {
  title: string;
  description: string;
  disconnectedBy: string;
  voiceChannel: string;
};
  serverDeafen: {
  title: string;
  description: string;
  deafenedBy: string;
  voiceChannel: string;
};
  serverMute: {
  title: string;
  description: string;
  mutedBy: string;
  voiceChannel: string;
};
  serverUndeafen: {
  title: string;
  description: string;
  undeafenedBy: string;
  voiceChannel: string;
};
  serverUnmute: {
  title: string;
  description: string;
  unmutedBy: string;
  voiceChannel: string;
};
  channelStatusUpdate: {
  title: string;
  description: string;
  status: string;
  linksToEmojis: string;
};
  stageStarted: {
  title: string;
  description: string;
  topic: string;
};
  stageEnded: {
  title: string;
  description: string;
  description_noExecutor: string;
  topic: string;
  none: string;
};
  stageUpdated: {
  title: string;
  description: string;
  oldTopic: string;
  newTopic: string;
};
  stageSpeakerAdd: {
  title: string;
  description: string;
  description_inviteAccepted: string;
};
  stageSpeakerRemove: {
  title: string;
  description: string;
};
  stageSpeakerInvited: {
  title: string;
  description: string;
};
}>;
};
};