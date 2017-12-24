/***

 This will reset EVERYTHING that is ACTIVE in the ghacks user.js
 release 57-alpha master, but excludes the following:
 - prefs removed since publishing on github
 - e10s section 1100
 - privacy.resistFingerprinting alternatives sections 4600 & 4700
 - deprecated section 9999

 It does not matter if you clear everything, as a restart will reapply your user.js
 Total 477 prefs from 57-alpha master: 118 inactive, 359 active
 These have been broken into two scripts for convenience
 
 For instructions see:
 https://github.com/ghacksuserjs/ghacks-user.js/wiki/3.1-Resetting-Inactive-Prefs-[Scripts]
 
***/
 
(function() {
  let ops = [
    /* 359 ACTIVE prefs in 57-alpha master */
    'accessibility.force_disabled',
    'alerts.showFavicons',
    'app.update.auto',
    'app.update.service.enabled',
    'app.update.silent',
    'app.update.staging.enabled',
    'beacon.enabled',
    'breakpad.reportURL',
    'browser.aboutHomeSnippets.updateUrl',
    'browser.backspace_action',
    'browser.bookmarks.max_backups',
    'browser.cache.disk.capacity',
    'browser.cache.disk.enable',
    'browser.cache.disk.smart_size.enabled',
    'browser.cache.disk.smart_size.first_run',
    'browser.cache.disk_cache_ssl',
    'browser.cache.frecency_experiment',
    'browser.cache.offline.enable',
    'browser.crashReports.unsubmittedCheck.autoSubmit',
    'browser.crashReports.unsubmittedCheck.enabled',
    'browser.ctrlTab.previews',
    'browser.display.use_document_fonts',
    'browser.download.folderList',
    'browser.download.forbid_open_with',
    'browser.download.hide_plugins_without_extensions',
    'browser.download.manager.addToRecentDocs',
    'browser.download.useDownloadDir',
    'browser.eme.ui.enabled',
    'browser.fixup.alternate.enabled',
    'browser.fixup.hide_user_pass',
    'browser.formfill.enable',
    'browser.helperApps.deleteTempFileOnExit',
    'browser.laterrun.enabled',
    'browser.library.activity-stream.enabled',
    'browser.link.open_newwindow',
    'browser.link.open_newwindow.restriction',
    'browser.newtab.preload',
    'browser.newtabpage.activity-stream.enabled',
    'browser.newtabpage.directory.source',
    'browser.newtabpage.enabled',
    'browser.newtabpage.enhanced',
    'browser.newtabpage.introShown',
    'browser.offline-apps.notify',
    'browser.onboarding.enabled',
    'browser.pagethumbnails.capturing_disabled',
    'browser.ping-centre.telemetry',
    'browser.rights.3.shown',
    'browser.safebrowsing.downloads.remote.enabled',
    'browser.safebrowsing.downloads.remote.url',
    'browser.safebrowsing.provider.google.reportMalwareMistakeURL',
    'browser.safebrowsing.provider.google.reportPhishMistakeURL',
    'browser.safebrowsing.provider.google.reportURL',
    'browser.safebrowsing.provider.google4.reportMalwareMistakeURL',
    'browser.safebrowsing.provider.google4.reportPhishMistakeURL',
    'browser.safebrowsing.provider.google4.reportURL',
    'browser.safebrowsing.reportPhishURL',
    'browser.search.countryCode',
    'browser.search.geoip.url',
    'browser.search.geoSpecificDefaults',
    'browser.search.geoSpecificDefaults.url',
    'browser.search.region',
    'browser.search.suggest.enabled',
    'browser.search.update',
    'browser.send_pings',
    'browser.send_pings.require_same_host',
    'browser.sessionhistory.max_entries',
    'browser.sessionstore.interval',
    'browser.sessionstore.max_tabs_undo',
    'browser.sessionstore.max_windows_undo',
    'browser.sessionstore.privacy_level',
    'browser.sessionstore.resume_from_crash',
    'browser.shell.checkDefaultBrowser',
    'browser.shell.shortcutFavicons',
    'browser.slowStartup.maxSamples',
    'browser.slowStartup.notificationDisabled',
    'browser.slowStartup.samples',
    'browser.ssl_override_behavior',
    'browser.startup.homepage_override.mstone',
    'browser.tabs.closeWindowWithLastTab',
    'browser.tabs.crashReporting.sendReport',
    'browser.tabs.insertRelatedAfterCurrent',
    'browser.tabs.loadDivertedInBackground',
    'browser.tabs.loadInBackground',
    'browser.tabs.selectOwnerOnClose',
    'browser.tabs.warnOnClose',
    'browser.tabs.warnOnCloseOtherTabs',
    'browser.tabs.warnOnOpen',
    'browser.taskbar.lists.enabled',
    'browser.taskbar.lists.frequent.enabled',
    'browser.taskbar.lists.recent.enabled',
    'browser.taskbar.lists.tasks.enabled',
    'browser.taskbar.previews.enable',
    'browser.uitour.enabled',
    'browser.uitour.url',
    'browser.urlbar.autoFill',
    'browser.urlbar.autoFill.typed',
    'browser.urlbar.clickSelectsAll',
    'browser.urlbar.decodeURLsOnCopy',
    'browser.urlbar.doubleClickSelectsAll',
    'browser.urlbar.filter.javascript',
    'browser.urlbar.maxHistoricalSearchSuggestions',
    'browser.urlbar.oneOffSearches',
    'browser.urlbar.speculativeConnect.enabled',
    // 'browser.urlbar.suggest.bookmark', // this may not get reset by your user.js - see issue #308
    // 'browser.urlbar.suggest.history', // ditto
    // 'browser.urlbar.suggest.openpage', // ditto
    'browser.urlbar.suggest.searches',
    'browser.urlbar.trimURLs',
    'browser.urlbar.usepreloadedtopurls.enabled',
    'browser.urlbar.userMadeSearchSuggestionsChoice',
    'browser.xul.error_pages.expert_bad_cert',
    'camera.control.face_detection.enabled',
    'canvas.capturestream.enabled',
    'captivedetect.canonicalURL',
    'datareporting.healthreport.about.reportUrl',
    'datareporting.healthreport.uploadEnabled',
    'datareporting.policy.dataSubmissionEnabled',
    'device.storage.enabled',
    'devtools.chrome.enabled',
    'devtools.debugger.remote-enabled',
    'devtools.webide.autoinstallADBHelper',
    'devtools.webide.enabled',
    'dom.allow_cut_copy',
    'dom.allow_scripts_to_close_windows',
    'dom.caches.enabled',
    'dom.disable_beforeunload',
    'dom.disable_window_flip',
    'dom.disable_window_move_resize',
    'dom.disable_window_open_feature.close',
    'dom.disable_window_open_feature.location',
    'dom.disable_window_open_feature.menubar',
    'dom.disable_window_open_feature.minimizable',
    'dom.disable_window_open_feature.personalbar',
    'dom.disable_window_open_feature.resizable',
    'dom.disable_window_open_feature.status',
    'dom.disable_window_open_feature.titlebar',
    'dom.disable_window_open_feature.toolbar',
    'dom.disable_window_status_change',
    'dom.event.clipboardevents.enabled',
    'dom.flyweb.enabled',
    'dom.idle-observers-api.enabled',
    'dom.imagecapture.enabled',
    'dom.IntersectionObserver.enabled',
    'dom.ipc.plugins.flash.subprocess.crashreporter.enabled',
    'dom.ipc.plugins.reportCrashURL',
    'dom.popup_allowed_events',
    'dom.popup_maximum',
    'dom.push.connection.enabled',
    'dom.push.enabled',
    'dom.push.serverURL',
    'dom.push.userAgentID',
    'dom.serviceWorkers.enabled',
    'dom.vibrator.enabled',
    'dom.webaudio.enabled',
    'dom.webnotifications.enabled',
    'dom.webnotifications.serviceworker.enabled',
    'dom.workers.enabled',
    'experiments.activeExperiment',
    'experiments.enabled',
    'experiments.manifest.uri',
    'experiments.supported',
    'extensions.autoDisableScopes',
    'extensions.blocklist.enabled',
    'extensions.blocklist.url',
    'extensions.enabledScopes',
    'extensions.formautofill.addresses.enabled',
    'extensions.formautofill.available',
    'extensions.formautofill.creditCards.enabled',
    'extensions.formautofill.heuristics.enabled',
    'extensions.getAddons.cache.enabled',
    'extensions.getAddons.showPane',
    'extensions.pocket.enabled',
    'extensions.shield-recipe-client.api_url',
    'extensions.shield-recipe-client.enabled',
    'extensions.update.autoUpdateDefault',
    'extensions.webcompat-reporter.enabled',
    'extensions.webextensions.keepStorageOnUninstall',
    'extensions.webextensions.keepUuidOnUninstall',
    'extensions.webservice.discoverURL',
    'font.blacklist.underline_offset',
    'full-screen-api.enabled',
    'general.useragent.compatMode.firefox',
    'general.useragent.locale',
    'general.warnOnAboutConfig',
    'geo.wifi.uri',
    'gfx.downloadable_fonts.enabled',
    'gfx.downloadable_fonts.woff2.enabled',
    'gfx.font_rendering.graphite.enabled',
    'gfx.font_rendering.opentype_svg.enabled',
    'gfx.offscreencanvas.enabled',
    'intl.accept_languages',
    'intl.locale.matchOS',
    'intl.regional_prefs.use_os_locales',
    'javascript.options.asmjs',
    'javascript.options.wasm',
    'javascript.use_us_english_locale',
    'keyword.enabled',
    'layers.acceleration.disabled',
    'layout.css.font-loading-api.enabled',
    'layout.css.visited_links_enabled',
    'layout.spellcheckDefault',
    'lightweightThemes.update.enabled',
    'mathml.disabled',
    'media.autoplay.enabled',
    'media.block-autoplay-until-in-foreground',
    'media.eme.enabled',
    'media.getusermedia.audiocapture.enabled',
    'media.getusermedia.browser.enabled',
    'media.getusermedia.screensharing.allowed_domains',
    'media.getusermedia.screensharing.enabled',
    'media.gmp-gmpopenh264.autoupdate',
    'media.gmp-gmpopenh264.enabled',
    'media.gmp-manager.updateEnabled',
    'media.gmp-manager.url',
    'media.gmp-manager.url.override',
    'media.gmp-provider.enabled',
    'media.gmp-widevinecdm.autoupdate',
    'media.gmp-widevinecdm.enabled',
    'media.gmp-widevinecdm.visible',
    'media.gmp.trial-create.enabled',
    'media.navigator.enabled',
    'media.navigator.video.enabled',
    'media.ondevicechange.enabled',
    'media.peerconnection.enabled',
    'media.peerconnection.ice.default_address_only',
    'media.peerconnection.ice.no_host',
    'media.peerconnection.ice.tcp',
    'media.peerconnection.identity.enabled',
    'media.peerconnection.identity.timeout',
    'media.peerconnection.turn.disable',
    'media.peerconnection.use_document_iceservers',
    'media.peerconnection.video.enabled',
    'middlemouse.contentLoadURL',
    'network.allow-experiments',
    'network.auth.subresource-img-cross-origin-http-auth-allow',
    'network.captive-portal-service.enabled',
    'network.cookie.cookieBehavior',
    'network.cookie.leave-secure-alone',
    'network.cookie.thirdparty.sessionOnly',
    'network.dns.blockDotOnion',
    'network.dns.disablePrefetch',
    'network.dns.disablePrefetchFromHTTPS',
    'network.http.altsvc.enabled',
    'network.http.altsvc.oe',
    'network.http.redirection-limit',
    'network.http.referer.hideOnionSource',
    'network.http.referer.spoofSource',
    'network.http.referer.trimmingPolicy',
    'network.http.referer.userControlPolicy',
    'network.http.referer.XOriginPolicy',
    'network.http.referer.XOriginTrimmingPolicy',
    'network.http.sendRefererHeader',
    'network.http.spdy.enabled',
    'network.http.spdy.enabled.deps',
    'network.http.spdy.enabled.http2',
    'network.http.speculative-parallel-limit',
    'network.IDN_show_punycode',
    'network.jar.block-remote-files',
    'network.jar.open-unsafe-types',
    'network.manage-offline-status',
    'network.predictor.enable-prefetch',
    'network.predictor.enabled',
    'network.prefetch-next',
    'network.protocol-handler.external.ms-windows-store',
    'network.proxy.autoconfig_url.include_path',
    'network.proxy.socks_remote_dns',
    'network.stricttransportsecurity.preloadlist',
    'offline-apps.allow_by_default',
    'pdfjs.disabled',
    'pdfjs.enableWebGL',
    'permissions.manager.defaultsUrl',
    'plugin.default.state',
    'plugin.defaultXpi.state',
    'plugin.scan.plid.all',
    'plugin.sessionPermissionNow.intervalInMinutes',
    'plugins.click_to_play',
    'privacy.clearOnShutdown.cache',
    'privacy.clearOnShutdown.cookies',
    'privacy.clearOnShutdown.downloads',
    'privacy.clearOnShutdown.formdata',
    'privacy.clearOnShutdown.history',
    'privacy.clearOnShutdown.offlineApps',
    'privacy.clearOnShutdown.sessions',
    'privacy.clearOnShutdown.siteSettings',
    'privacy.cpd.cache',
    'privacy.cpd.cookies',
    'privacy.cpd.formdata',
    'privacy.cpd.history',
    'privacy.cpd.offlineApps',
    'privacy.cpd.passwords',
    'privacy.cpd.sessions',
    'privacy.cpd.siteSettings',
    'privacy.donottrackheader.enabled',
    'privacy.firstparty.isolate',
    'privacy.firstparty.isolate.restrict_opener_access',
    'privacy.resistFingerprinting',
    'privacy.sanitize.sanitizeOnShutdown',
    'privacy.sanitize.timeSpan',
    'privacy.trackingprotection.ui.enabled',
    'security.ask_for_password',
    'security.block_script_with_wrong_mime',
    'security.cert_pinning.enforcement_level',
    'security.csp.enable',
    'security.csp.experimentalEnabled',
    'security.data_uri.block_toplevel_data_uri_navigations',
    'security.dialog_enable_delay',
    'security.family_safety.mode',
    'security.fileuri.strict_origin_policy',
    'security.insecure_field_warning.contextual.enabled',
    'security.insecure_password.ui.enabled',
    'security.mixed_content.block_active_content',
    'security.mixed_content.send_hsts_priming',
    'security.mixed_content.use_hsts',
    'security.OCSP.enabled',
    'security.OCSP.require',
    'security.password_lifetime',
    'security.pki.sha1_enforcement_level',
    'security.sri.enable',
    'security.ssl.disable_session_identifiers',
    'security.ssl.enable_ocsp_stapling',
    'security.ssl.errorReporting.automatic',
    'security.ssl.errorReporting.enabled',
    'security.ssl.errorReporting.url',
    'security.ssl.treat_unsafe_negotiation_as_broken',
    'security.tls.enable_0rtt_data',
    'security.tls.version.fallback-limit',
    'security.tls.version.max',
    'security.tls.version.min',
    'security.xpconnect.plugin.unrestricted',
    'services.blocklist.signing.enforced',
    'services.blocklist.update_enabled',
    'signon.autofillForms',
    'signon.autofillForms.http',
    'signon.formlessCapture.enabled',
    'signon.storeWhenAutocompleteOff',
    'startup.homepage_override_url',
    'startup.homepage_welcome_url',
    'startup.homepage_welcome_url.additional',
    'toolkit.telemetry.archive.enabled',
    'toolkit.telemetry.bhrPing.enabled',
    'toolkit.telemetry.cachedClientID',
    'toolkit.telemetry.enabled',
    'toolkit.telemetry.firstShutdownPing.enabled',
    'toolkit.telemetry.newProfilePing.enabled',
    'toolkit.telemetry.server',
    'toolkit.telemetry.shutdownPingSender.enabled',
    'toolkit.telemetry.unified',
    'toolkit.telemetry.updatePing.enabled',
    'ui.submenuDelay',
    'ui.use_standins_for_native_colors',
    'view_source.tab',
    'webchannel.allowObject.urlWhitelist',
    'webgl.disable-extensions',
    'webgl.disable-fail-if-major-performance-caveat',
    'webgl.disabled',
    'webgl.dxgl.enabled',
    'webgl.enable-debug-renderer-info',
    'webgl.enable-webgl2',
    'webgl.min_capability_mode',

    /* reset parrot: check your open about:config after running the script */
    '_user.js.parrot'
  ]

  if("undefined" === typeof(Services)) {
    alert("about:config needs to be the active tab!");
    return;
  }
  
  let c = 0;
  for (let i = 0, len = ops.length; i < len; i++) {
    if (Services.prefs.prefHasUserValue(ops[i])) {   
      Services.prefs.clearUserPref(ops[i]);
      if (!Services.prefs.prefHasUserValue(ops[i])) {
        console.log("reset", ops[i]);
        c++;
      } else { console.log("failed to reset", ops[i]); }
    }
  }
  
  focus();
  
  let d = (c==1) ? " pref" : " prefs";
  if (c > 0) {
    alert("successfully reset " + c + d + "\n\nfor details check the Browser Console (Ctrl+Shift+J)");
  } else { alert("nothing to reset"); }
  
})();
