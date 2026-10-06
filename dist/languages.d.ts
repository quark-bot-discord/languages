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
  enableButton: string;
};
  categoryText: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
};
  categoryVoice: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
};
  categoryActions: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
};
  categoryChannels: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
};
  categoryServer: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
};
  categoryRoles: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
};
  categoryModlog: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
};
  overview: {
  title: string;
  description: string;
};
  categoryQuark: {
  title: string;
  description: string;
  resetButton: string;
  disableButton: string;
  enableButton: string;
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
  furtherConfig: string;
};
  "help-modify-tags-description": string;
  "banButton-banning": string;
  "banButton-cancel": string;
  "setserverlog-live-title": string;
  "setserverlog-live-desc": string;
  "setserverlog-live-try": string;
  "setserverlog-live-customise": string;
  "setserverlog-live-troubleshoot": string;
  "setserverlog-live-support": string;
  "setserverlog-live-status": string;
  "setserverlog-type-nsfw-0": string;
  "setserverlog-type-nsfw-1": string;
  "logchannel-error-title": string;
  "logchannel-error-missing-permissions": string;
  "logchannel-error-channel-unreachable": string;
  "logchannel-error-invalid-channel": string;
  "logchannel-error-too-many-webhooks": string;
  "logchannel-error-unavailable": string;
  "logchannel-error-that-channel": string;
  "logids-none": string;
  "logids-more": string;
  "logids-kind-user": string;
  "logids-kind-role": string;
  "logids-kind-channel": string;
  "logids-kind-id": string;
  "logreport-modal-title": string;
  "logreport-modal-label": string;
  "logreport-modal-placeholder": string;
  "logreport-sent": string;
  "logreport-expired": string;
  "logreport-cooldown": string;
  "logreport-unavailable": string;
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
  threadModificationTypes: {
  rate_limit_per_user: string;
  auto_archive_duration: string;
  name: string;
  locked: string;
  invitable: string;
  flags: string;
};
  stickerModificationTypes: {
  name: string;
  description: string;
  tags: string;
};
  soundboardSoundModificationTypes: {
  name: string;
  volume: string;
  emoji: string;
};
  threadModificationValues: {
  yes: string;
  no: string;
  tagsAdded: string;
  tagsRemoved: string;
  unknownTag: string;
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
  category_actions: string;
  category_channels: string;
  category_files: string;
  category_members: string;
  category_modlog: string;
  category_quark: string;
  category_roles: string;
  category_server: string;
  category_text: string;
  category_voice: string;
  main_channel: string;
  category_nsfw: string;
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
  USE_EXTERNAL_APPS: string;
  PIN_MESSAGES: string;
  BYPASS_SLOWMODE: string;
  MANAGE_EVENTS: string;
  MANAGE_GUILD_EXPRESSIONS: string;
}>;
  role_update_types: Promise<{
  enabled: string;
  disabled: string;
  none: string;
  holographic: string;
}>;
  soundboard_sound_update_types: Promise<{
  none: string;
}>;
  sticker_update_types: Promise<{
  none: string;
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
  thread_update_types: Promise<{
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
  dashboard: Promise<{
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
  logging: Promise<{
  name: string;
  description: string;
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
  troubleshoot: Promise<{
  name: string;
  description: string;
  commandOptions: {
  shareOption: {
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
  vote: Promise<{
  name: string;
  description: string;
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
  warning: string;
  dangerousPermissions: string;
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
  general: {
  unknownChannel: string;
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
  usingBot: string;
  lock: string;
  unlock: string;
  history: string;
  editedBy: string;
  editedByMany: string;
  lockedManual: string;
  lockedDisabled: string;
  lockedExpired: string;
  historyTitle: string;
  historyEdited: string;
  historyLocked: string;
  historyUnlocked: string;
  historyEarlier: string;
  historyEarlierOne: string;
  historyUpsell: string;
  historyEmpty: string;
  historyUnavailable: string;
  sharedMessage: string;
  editModalTitle: string;
  imagesLabel: string;
  imagesDescription: string;
  imagesRemoveLabel: string;
  imagesRemoveDescription: string;
  imagesNotImages: string;
  imagesTooLarge: string;
  imagesTooMany: string;
  imagesNoPermission: string;
  imagesFailed: string;
  historyImagesAdded: string;
  historyImagesRemoved: string;
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
  modlogLockAfter: string;
  modlogLockAfterAlways: string;
  modlogLockAfterNever: string;
  modlogLockAfterTimed: string;
  automationRule: string;
  automationRuleCreated: string;
  automationRuleDeleted: string;
  automationRuleEdited: string;
  automationRuleRenamed: string;
  automationRuleDryOn: string;
  automationRuleSwitchedOn: string;
  automationRuleDryOff: string;
  automationRuleSwitchedOff: string;
  automationRuleDoes: string;
  automationRuleDoes_alert: string;
  automationRuleDoes_timeout: string;
  automationRuleDoes_skip: string;
  automationRuleDoes_kick: string;
  automationRuleDoes_ban: string;
  automationRuleDoes_delmsg: string;
  automationRuleDoes_notice: string;
  automationRuleDoes_role: string;
  automationRuleDoes_dm: string;
  automationRuleDoes_copy: string;
  automationRuleDoes_colour: string;
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
  description_request_by: string;
  description_request_about: string;
  description_request_hourly_by: string;
  description_request_hourly_about: string;
  request_logs_type: string;
  request_logs_any: string;
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
  guildSubscriptionUpdate: {
  title_applied: string;
  title_removed: string;
  description_applied: string;
  description_removed: string;
  quark_pro: string;
  quark_prolite: string;
  none: string;
  executor: string;
  teaser_pro: string;
};
  proPromotion: {
  title: string;
  unknownAuthor: string;
  contentUnavailable: string;
  hiddenExecutor: string;
  messageRetention: string;
  voiceModeration: string;
  cta: string;
  alsoSuppressed: string;
  digestTitle: string;
  digestMessageRetention: string;
  digestVoiceModeration: string;
  digestFooter: string;
  upgradeToView: string;
  messageRetentionEdit: string;
  messageRetentionDelete: string;
  sentAgo: string;
  messageAgeDelete: string;
  messageAgeEdit: string;
  optOutLink: string;
  optOut: string;
  retainedMessage: string;
  retainedFiles: string;
  retainedOriginal: string;
  executorShown: string;
};
  dashboardAccessUpdate: {
  title: string;
  description_created: string;
  description_updated: string;
  description_revoked: string;
  capability_viewLogs: string;
  capability_viewLogHistory: string;
  capability_exportLogs: string;
  capability_viewConfig: string;
  capability_manageLogChannels: string;
  capability_manageLogSettings: string;
  capability_manageTags: string;
  capability_manageSettings: string;
  capability_viewAnalytics: string;
  capability_manageAccess: string;
  capability_manageAutomations: string;
  capability_other: string;
  capability_none: string;
  preset_logViewer: string;
  preset_logAnalyst: string;
  preset_moderator: string;
  preset_logConfigurator: string;
  preset_full: string;
};
  ruleNotice: string;
  ruleAction: {
  title: string;
  description_alert: string;
  description_timeout: string;
  description_kick: string;
  description_ban: string;
  description_delmsg: string;
  description_budget: string;
  description_flag_no_permission: string;
  description_flag_hierarchy: string;
  description_flag: string;
  description_flag_error: string;
  member_unknown: string;
  channel_unknown: string;
  trigger: string;
  description_role_give: string;
  description_role_take: string;
  description_dm: string;
  description_flag_role: string;
  role_unknown: string;
  dm_footer: string;
  description_flag_saver_permission: string;
  description_flag_saver_timeout: string;
  description_flag_saver_channel: string;
  description_flag_saver_hierarchy: string;
  description_flag_saver_role: string;
  description_flag_role_elevated: string;
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
  warning: string;
  dangerousPermissions: string;
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
  stickerCreated: {
  title: string;
  description: string;
  stickerDescription: string;
  stickerEmoji: string;
};
  stickerDeleted: {
  title: string;
  description: string;
};
  stickerUpdated: {
  title: string;
  description: string;
};
  soundboardSoundCreated: {
  title: string;
  description: string;
  soundEmoji: string;
  description_noexecutor: string;
};
  soundboardSoundDeleted: {
  title: string;
  description: string;
  description_noexecutor: string;
};
  soundboardSoundUpdated: {
  title: string;
  description: string;
  description_noexecutor: string;
};
  autoModerationRuleCreated: {
  title: string;
  exemptRoles: string;
  exemptChannels: string;
  conditions: string;
  actions: string;
  description_type: {
  message_send: string;
  member_update: string;
};
  description: string;
  description_noexecutor: string;
};
  autoModerationRule: {
  trigger: {
  key: {
  keyword_filter: string;
  regex_patterns: string;
  presets: string;
  allow_list: string;
  mention_total_limit: string;
  mention_raid_protection_enabled: string;
  spam: string;
  keyword_preset: string;
};
  value: {
  presets: {
  "1": string;
  "2": string;
  "3": string;
};
};
};
  action: {
  type: {
  block_message: string;
  send_alert_message: string;
  timeout: string;
  block_member_interaction: string;
};
};
};
  autoModerationRuleDeleted: {
  title: string;
  description: string;
  conditions: string;
  exemptRoles: string;
  exemptChannels: string;
  actions: string;
  description_noexecutor: string;
};
  autoModerationRuleUpdated: {
  title: string;
  description: string;
  description_noexecutor: string;
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
  description_kicked: string;
  description_kicked_no_executor: string;
  description_banned: string;
  description_banned_no_executor: string;
  info: string;
  info_kicked: string;
  info_banned: string;
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
  warning: string;
  dangerousPermissions: string;
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
  filesWithheldCsam: string;
  filesWithheldHarmful: string;
  filesWithheldUnchecked: string;
  filesWithheldOther: string;
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
  embedAuthor: string;
  embedTitle: string;
  embedImage: string;
  embedThumbnail: string;
  embedVideo: string;
  embedFooter: string;
  embedTimestamp: string;
  errorFilePermissions: string;
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
  threadUpdated: {
  description: string;
  title: string;
  descriptionClosed: string;
  descriptionReopened: string;
  descriptionLocked: string;
  descriptionUnlocked: string;
};
  reactionBundle: {
  title: string;
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
  streamedFor: string;
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
  timeInPrevious: string;
};
  voiceMove: {
  title: string;
  description: string;
  movedBy: string;
  timeInPrevious: string;
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
  channels: string;
  channelDuration: string;
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
  descriptionRemoved: string;
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
  voiceBundle: {
  title: string;
};
}>;
};
  web: {
  logViewer: Promise<{
  summary: {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "10": string;
  "11": string;
  "12": string;
  "13": string;
  "14": string;
  "15": string;
  "16": string;
  "17": string;
  "18": string;
  "19": string;
  "20": string;
  "21": string;
  "22": string;
  "23": string;
  "24": string;
  "25": string;
  "26": string;
  "27": string;
  "28": string;
  "29": string;
  "30": string;
  "31": string;
  "32": string;
  "33": string;
  "34": string;
  "35": string;
  "36": string;
  "37": string;
  "38": string;
  "39": string;
  "40": string;
  "41": string;
  "42": string;
  "43": string;
  "44": string;
  "45": string;
  "46": string;
  "47": string;
  "48": string;
  "49": string;
  "50": string;
  "51": string;
  "52": string;
  "53": string;
  "54": string;
  "55": string;
  "56": string;
  "57": string;
  "58": string;
  "59": string;
  "60": string;
  "61": string;
  "62": string;
  "63": string;
  "64": string;
  "65": string;
  "66": string;
  "67": string;
  "68": string;
  "69": string;
  "70": string;
  "71": string;
  "72": string;
  "73": string;
  "74": string;
  "75": string;
  "76": string;
  "77": string;
  "78": string;
  "79": string;
  "80": string;
  "81": string;
  "82": string;
  "83": string;
  "84": string;
  "85": string;
  "86": string;
  "87": string;
  "88": string;
  "89": string;
  "90": string;
  "91": string;
  "92": string;
  "93": string;
  "94": string;
  "95": string;
  "96": string;
  "97": string;
  "98": string;
  "101": string;
  "0_actor": string;
  "0_passive": string;
  "3_actor": string;
  "4_actor": string;
  "4_passive": string;
  "5_actor": string;
  "5_passive": string;
  "6_actor": string;
  "7_actor": string;
  "14_actor": string;
  "16_actor": string;
  "19_actor": string;
  "20_actor": string;
  "21_actor": string;
  "22_actor": string;
  "25_actor": string;
  "34_actor": string;
  "35_actor": string;
  "39_actor": string;
  "40_actor": string;
  "41_actor": string;
  "42_actor": string;
  "43_actor": string;
  "44_actor": string;
  "45_actor": string;
  "46_actor": string;
  "51_actor": string;
  "51_passive": string;
  "57_actor": string;
  "58_actor": string;
  "63_actor": string;
  "69_added": string;
  "69_removed": string;
  "69_enabled": string;
  "69_disabled": string;
  "86_actor": string;
  "86_passive": string;
  "2_kick": string;
  "2_ban": string;
  "2_actor": string;
  via: string;
  "101_alert": string;
  "101_timeout": string;
  "101_kick": string;
  "101_ban": string;
  "101_delmsg": string;
  "101_budget": string;
  "101_flag_no_permission": string;
  "101_flag_hierarchy": string;
  "101_flag_error": string;
  "101_flag_budget": string;
  "101_flag": string;
  "101_role_give": string;
  "101_role_take": string;
  "101_dm": string;
  "101_flag_role": string;
  "69_request_by": string;
  "69_request_about": string;
  "69_request_hourly_by": string;
  "69_request_hourly_about": string;
};
  ui: {
  allChannels: string;
  allLogTypes: string;
  allRoles: string;
  applyRange: string;
  askChannelNotFound: string;
  askExamples: string;
  askFailed: string;
  askFallback: string;
  askIgnoredWords: string;
  askLabel: string;
  askMemberAmbiguous: string;
  askMemberNotFound: string;
  askPhraseNarrowed: string;
  askPlaceholder: string;
  askRoleNotFound: string;
  askSubmit: string;
  askSuggestions: string;
  askTooBroad: string;
  askTypeNotFound: string;
  askUnsupported: string;
  backToDashboard: string;
  category: string;
  channel: string;
  clear: string;
  clearAll: string;
  clearRange: string;
  copyPermalink: string;
  customRange: string;
  delivered: string;
  deliveredTo: string;
  deliveryPending: string;
  dismiss: string;
  empty: string;
  emptyFiltered: string;
  emptyFilteredHint: string;
  emptyHint: string;
  emptyLive: string;
  emptyLiveBadge: string;
  emptyLiveHint: string;
  entryCount: string;
  errorBody: string;
  errorTitle: string;
  executorId: string;
  exportCsv: string;
  exportEmpty: string;
  exportEmptyBody: string;
  exportLockedBody: string;
  exportLockedTitle: string;
  exporting: string;
  filterCategoryLabel: string;
  filterChannelLabel: string;
  filterMemberByLabel: string;
  filterMemberLabel: string;
  filterMemberOnLabel: string;
  filterRangeLabel: string;
  filterRoleLabel: string;
  filterSearchLabel: string;
  filterToUser: string;
  filterTypeLabel: string;
  filtered: string;
  filteredNote: string;
  filters: string;
  from: string;
  historyLocked: string;
  historyLockedCta: string;
  last24Hours: string;
  last30Days: string;
  last7Days: string;
  lastHour: string;
  live: string;
  loading: string;
  lockedFeature: string;
  logId: string;
  logType: string;
  logTypesSelected: string;
  member: string;
  memberPlaceholder: string;
  memberRoleEither: string;
  memberRoleExecutor: string;
  memberRoleTarget: string;
  newEntries: string;
  newEntry: string;
  noLogTypeMatches: string;
  notDelivered: string;
  offline: string;
  openInDiscord: string;
  openLogMessage: string;
  paused: string;
  permalinkCopied: string;
  rangeTooEarly: string;
  realtimeOnly: string;
  recoveryBody: string;
  recoveryCta: string;
  recoveryTitle: string;
  removeFilter: string;
  retention: string;
  retry: string;
  role: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchPlaceholderLogType: string;
  selectServer: string;
  timeRange: string;
  title: string;
  to: string;
  wallBadge: string;
  wallBody: string;
  wallCta: string;
  wallFine: string;
  wallTitle: string;
  wallTitleOne: string;
  heldBackByRule: string;
  ruleNotices: string;
};
  deliveryReason: {
  local_rate_limit: string;
  channel_parked: string;
  request_timeout_or_network: string;
  rate_limited: string;
  unknown: string;
};
}>;
  site: Promise<{
  ui: {
  s005ef20f: string;
  s046dc757: string;
  s095d40d1: string;
  s0c632e38: string;
  s0f37fc2f: string;
  s11f6d87b: string;
  s12f8f721: string;
  s184efde6: string;
  s19f46d3f: string;
  s1d9137de: string;
  s1fc12001: string;
  s22334dc2: string;
  s24eb62b6: string;
  s2ab00472: string;
  s321cd61f: string;
  s36a9ba77: string;
  s3886a127: string;
  s3ab96fb8: string;
  s41518281: string;
  s48047eb8: string;
  s50fe3796: string;
  s512b4e16: string;
  s526546ee: string;
  s5293d033: string;
  s529c60cc: string;
  s59ed1fe8: string;
  s5cf3a617: string;
  s5fad94e2: string;
  s5fae0d89: string;
  s623ae14f: string;
  s64fda4d7: string;
  s65492f33: string;
  s65cea9fa: string;
  s68b45d1f: string;
  s6aa2b166: string;
  s6be6f488: string;
  s6c4737ea: string;
  s72fcba9d: string;
  s790c7852: string;
  s825467e8: string;
  s82c7f85d: string;
  s8418a386: string;
  s8537abeb: string;
  s86cc09a7: string;
  s881c63cf: string;
  s8fc9000a: string;
  s8fcacbf2: string;
  s92073f67: string;
  s9435adcc: string;
  s943e41d3: string;
  s983277c4: string;
  s996a065b: string;
  s9fb7c3d3: string;
  sa02933ce: string;
  sa1a2e32c: string;
  sa7b541d1: string;
  sab43ac5c: string;
  sb3dc8779: string;
  sb4d17ded: string;
  sb57fc1f8: string;
  sbd49af03: string;
  sc1bf0f5c: string;
  sc23be9f3: string;
  sc2db6e1e: string;
  sc5d2b662: string;
  sc79c4311: string;
  sc8d2dcdf: string;
  sc96624d1: string;
  sd057894d: string;
  sd57a0a54: string;
  sda5c7469: string;
  sdc12af4a: string;
  sdd8dcb15: string;
  sde7530aa: string;
  se062a6ec: string;
  se4091196: string;
  se82849aa: string;
  sebfa87e7: string;
  seeb62c2c: string;
  sef9893ac: string;
  sf220b01b: string;
  sf6247698: string;
  sfa2bcab0: string;
};
  title: {
  s050dca8f: string;
  s13c2bc8a: string;
  s1f77b38d: string;
  s36315d3d: string;
  s47c0e05f: string;
  s58509b20: string;
  s5c3c3d02: string;
  s629de7ef: string;
  s6b71b4ed: string;
  s78613f17: string;
  sac43e022: string;
  sb822f678: string;
  sbe1cfea3: string;
  sfa28ef9f: string;
};
  description: {
  s0529ecf5: string;
  s2709681e: string;
  s330e4f72: string;
  s49f55b79: string;
  s6c73a8bb: string;
  s779b1091: string;
  s7e659924: string;
  s80948ae3: string;
  s81098d46: string;
  sa3da5580: string;
  sc764369c: string;
  scdef2d95: string;
  sd0cea761: string;
  sd60b5c1d: string;
};
  keyword: {
  s1390a737: string;
  s3009dc13: string;
  s351cc576: string;
  s46000510: string;
  s4c871078: string;
  s6cf1faf0: string;
  s77701a4f: string;
  s9e99279c: string;
  sa0c84cca: string;
  sccaa3815: string;
  sd6536178: string;
  sda865915: string;
  sdca3b66b: string;
  sf9ebf8c5: string;
};
  name: {
  s1529e05a: string;
  s1ae9ed88: string;
  s2a6e3899: string;
  s3c382032: string;
  s4cd540aa: string;
  s8dcdacc4: string;
  s97158423: string;
  s991f7470: string;
  sb068ad30: string;
  se06dfb16: string;
  se1a2d9bb: string;
  se60b6f28: string;
  sf4fc86af: string;
  sff0334f2: string;
};
  headline: {
  s031b3bf8: string;
  s0848b79e: string;
  s0878f0ef: string;
  s08d334f9: string;
  s1029f6f2: string;
  s31e9c1c0: string;
  s3c485cf5: string;
  s460890ba: string;
  s51a1dab6: string;
  s58d8477c: string;
  s5a434286: string;
  s61760064: string;
  s697e794c: string;
  s791e83a1: string;
  s79fbea7d: string;
  s7a237e12: string;
  s912b4118: string;
  s9384b196: string;
  s98140abd: string;
  sb25cf411: string;
  sc5d1aea8: string;
  scad51421: string;
  sd1309d36: string;
  sdbfa84bb: string;
  se01c0056: string;
  sf1cf7fe7: string;
  sf7c2b8cf: string;
  sf9b8e29b: string;
};
  sub: {
  s00cb0abc: string;
  s20612aee: string;
  s3f70fcf7: string;
  s46f450a9: string;
  s4731bfa4: string;
  s7dac6a4d: string;
  s9f2e20df: string;
  sa8c6eb93: string;
  sc3b1af9a: string;
  sc65b2303: string;
  sd051bf9f: string;
  sd2ec42b4: string;
  sd3afb0e6: string;
  sf1f1288f: string;
};
  question: {
  s01741c1c: string;
  s05c0b6c7: string;
  s0a6d3ba1: string;
  s0df7c4b4: string;
  s0ec628db: string;
  s10f740ec: string;
  s15be7c96: string;
  s187f1957: string;
  s1b5677fd: string;
  s1d809be1: string;
  s24e2201e: string;
  s2827c3a9: string;
  s2ae3c9ba: string;
  s2b319806: string;
  s2d5713f9: string;
  s2d754de2: string;
  s2f7ad332: string;
  s2ffbd580: string;
  s30a0cd5e: string;
  s3228868d: string;
  s324a3a20: string;
  s35606ff9: string;
  s362f81bf: string;
  s3a3319f5: string;
  s3e2c3f25: string;
  s44c4f130: string;
  s470a4f2d: string;
  s5156d2e6: string;
  s5294ee01: string;
  s577bfe77: string;
  s59b4a0e1: string;
  s59f8a1d5: string;
  s5b49c8d4: string;
  s5db0e15c: string;
  s5fbcfe7b: string;
  s6134fb59: string;
  s647720f3: string;
  s64a644d6: string;
  s6afa2db8: string;
  s6eac25c1: string;
  s72e67358: string;
  s7b858108: string;
  s804e959a: string;
  s823a7625: string;
  s857bf087: string;
  s85c92094: string;
  s85fc7c16: string;
  s86251307: string;
  s86d19775: string;
  s917c6855: string;
  s91d8a9df: string;
  s91f17259: string;
  s92d5a3dc: string;
  s932943b8: string;
  s947843a8: string;
  s955d4385: string;
  s95988bb8: string;
  sa5b486ec: string;
  sa5c85bda: string;
  sa5e31ee6: string;
  sa7b923fa: string;
  saf744c64: string;
  sb184c49a: string;
  sb2699fd4: string;
  sb687a39b: string;
  sb6e55939: string;
  sb7317db3: string;
  sbaa9c26f: string;
  sbe550034: string;
  sc91b3b2f: string;
  scc64e586: string;
  sd1bfd7d0: string;
  sd2d1ce21: string;
  sd7e9e748: string;
  sd99580e4: string;
  sd9a9ecba: string;
  sdcf625d3: string;
  sdd51a5f5: string;
  se1896d36: string;
  se653eddf: string;
  se7914b94: string;
  seb07fa8c: string;
  sefe5718b: string;
  sf14ffded: string;
  sf44f18a7: string;
  sf9332ebb: string;
  sfeb7132f: string;
};
  answer: {
  s0d7afe4c: string;
  s0edb7ca5: string;
  s0f2f4481: string;
  s12c0d7e2: string;
  s1842fefd: string;
  s19617db6: string;
  s1fc8fad4: string;
  s1fd6f89c: string;
  s22e37084: string;
  s26608904: string;
  s274d1dee: string;
  s3868cad3: string;
  s39c35b54: string;
  s4204c3af: string;
  s427a189f: string;
  s45f4eb9f: string;
  s4881bbbb: string;
  s52ff9d70: string;
  s5405614a: string;
  s54b0706b: string;
  s571f70a5: string;
  s5d141207: string;
  s604a525e: string;
  s61c83781: string;
  s657d4732: string;
  s668770f2: string;
  s68ac029b: string;
  s6eb28758: string;
  s6ece5c1e: string;
  s6f58c981: string;
  s780158d5: string;
  s788a29cc: string;
  s79e4be3d: string;
  s7a89cb88: string;
  s7bfc2f6c: string;
  s7dc8c0a1: string;
  s7dccb6f7: string;
  s7ed50103: string;
  s7fd94b2c: string;
  s803af609: string;
  s82f7483d: string;
  s85a37aee: string;
  s8c0a0b1a: string;
  s8c198b7e: string;
  s92298ea2: string;
  s996685d3: string;
  s9ad5f09a: string;
  sa0897e69: string;
  sa4bfb74a: string;
  sa96317a3: string;
  saa3f247e: string;
  saa52a027: string;
  sae6e9391: string;
  sae869f9b: string;
  sb0d8792f: string;
  sb21875b3: string;
  sb295eded: string;
  sb76457df: string;
  sb963e803: string;
  sba092ade: string;
  sbc088d64: string;
  sbe4905d3: string;
  sc43cbaff: string;
  sc5d022ef: string;
  sc723b0f6: string;
  sc897176e: string;
  sca736290: string;
  sce667889: string;
  sd2556319: string;
  sd4808d78: string;
  sd4c6d2f8: string;
  sd65a2956: string;
  sd734498e: string;
  sda384a77: string;
  sda8ccbb5: string;
  se04c4a29: string;
  se59d65e1: string;
  se641efe7: string;
  se844f101: string;
  seaa5b8bc: string;
  seb18cf58: string;
  seb862c24: string;
  see57130f: string;
  sf107ce7f: string;
  sf820007a: string;
  sfa45164b: string;
  sfad59db0: string;
};
  fact: {
  s002318ad: string;
  s01628592: string;
  s069395f6: string;
  s06b91440: string;
  s0ae77b05: string;
  s0b3e5cdc: string;
  s0b823a52: string;
  s16fc9bad: string;
  s18448ca2: string;
  s196b5d8c: string;
  s20f199df: string;
  s261647b8: string;
  s261adf1c: string;
  s279d1f22: string;
  s291a6ca5: string;
  s2bfa89ed: string;
  s3405a8a1: string;
  s369aedf8: string;
  s3c541462: string;
  s41cfe0ee: string;
  s424a4f70: string;
  s4ab3cc78: string;
  s4b5ea577: string;
  s52a67f43: string;
  s561a6934: string;
  s592e3b97: string;
  s59a63359: string;
  s6211fe01: string;
  s64caa67f: string;
  s67725d2c: string;
  s6b47e8b3: string;
  s6ba41634: string;
  s6e2271a0: string;
  s70d276bf: string;
  s7d785e5a: string;
  s830a589d: string;
  s8cb95e6f: string;
  s971ac4a0: string;
  sa917f414: string;
  sb6dacca4: string;
  sb9247af6: string;
  sbae5f3d7: string;
  sc0f9f39b: string;
  sc1c74fa6: string;
  sc4ade53d: string;
  sc8c42c44: string;
  sce6d13a2: string;
  scf2a2fd7: string;
  scfe1247e: string;
  sd19c04c0: string;
  sd1b25e9f: string;
  se062a2f6: string;
  se4ca9e71: string;
  se7a73445: string;
  se8383587: string;
  se8f6c1e9: string;
  see861eb7: string;
  seed6b48d: string;
  sf25654a4: string;
  sf59b79ca: string;
  sf8b251d7: string;
  sf8f796cb: string;
  sfd314b8c: string;
  sfe3d9688: string;
  sfe8ab62c: string;
};
  heading: {
  s11c2078e: string;
  s1a224700: string;
  s31f330df: string;
  s49169b15: string;
  s51e2290f: string;
  s5a07f42d: string;
  s8cc5637d: string;
  sa1f72b76: string;
  sa7831de3: string;
  sc2ebf399: string;
  seb69434c: string;
  sf9e6cdf8: string;
  sfbd25f78: string;
  sffa5edbe: string;
};
  related: {
  s04aceab8: string;
  s0a918000: string;
  s140de7c4: string;
  s2040af72: string;
  s242c6f4c: string;
  s2988ee38: string;
  s29c7d0da: string;
  s6182ae2f: string;
  s6e7f7569: string;
  sbf099778: string;
  sc9d1c265: string;
  scc425314: string;
  sded8d5c6: string;
  se75dbb02: string;
};
}>;
};
};
export type SlashCommandNames = "ban" | "commands" | "dashboard" | "config" | "debug" | "export" | "help" | "initialReactor" | "invite" | "kick" | "logging" | "language" | "mute" | "ping" | "premium" | "privacy" | "purge" | "reason" | "serverlog" | "tags" | "troubleshoot" | "unmute" | "unban" | "vote";
export type QuarkLanguageCodes = "en_us" | "en_gb" | "tr" | "vi" | "en_pr" | "pl" | "nl" | "es_es" | "it" | "de" | "fr" | "ru" | "el" | "zh_hant" | "ko" | "sl" | "ar" | "hu" | "ja";
