<template>
  <div>
    <section class="config">
      <div>
        <span>Game Version:</span>
        <VersionSelect :onChange="onVersionChanged" :selectedValue="selectedVersion" />
      </div>
      <div>
        <span>Download Format:</span>
        <FormatSelect :onChange="onFormatChanged" :selectedValue="selectedFormat" />
      </div>
      <div>
        <span>Use Stage Loader:</span>
        <SelectComponent
          :options="useStageLoaderOptions"
          :onChange="onStageLoaderChanged"
          :value="useStageLoader"
        />
      </div>
      <div>
        <span>Download:</span>
        <DownloadButton
          :codes="selectedCheats"
          :stageLoaderCode="selectedStageLoader"
          :versionIdentifier="selectedVersion"
          :format="selectedFormat"
        />
      </div>
    </section>
    <br />
    <hr />
    <section>
      <div v-if="codes && codes.length > 0">
        <h3>Available Codes</h3>
        <CodeList
          :codes="codes"
          :onSelectionChanged="onCheatSelectionChanged"
          :onInspect="inspect"
        />
      </div>
      <div class="prevent-shrink" v-if="codes && codes.length > 0 && useStageLoader">
        <h3>Stage Loader</h3>
        <StageLoader :fastCodes="stageLoaderCodes" :onChange="onStageLoaderCodeChanged" />
      </div>

      <div v-if="codes && codes.length > 0" class="help">
        <h3>Help</h3>
        <CodeInfo v-if="!!inspectingCode" :code="inspectingCode" />
        <div v-else>Select your codes from the list on the left.</div>
      </div>
      <div v-if="selectedVersion == null" class="help">
        <h1>Super Mario Sunshine Practice File Generator</h1>
        <div>
          <p>
            This is a cheatfile generator for Super Mario Sunshine speedrun practice. If this is
            your first time using the generator we highly recommend to check out the
            <a href="/guide.html" target="_blank">guide</a> first. Visit the
            <a href="/guide.html#troubleshooting" target="_blank">the troubleshooting section</a>
            if you encounter any issues.
          </p>
          <div>
            <h3>The SMS Speedrunning Community</h3>
            <ul>
              <li>
                <a href="https://discord.gg/9dGJWEc" target="_blank" rel="noopener">Discord</a>
              </li>
              <li>
                <a href="https://speedrun.com/sms" target="_blank" rel="noopener"
                  >Speedrun.com Leaderboards</a
                >
              </li>
              <li>
                <a href="https://twitter.com/SMSCommunity" target="_blank" rel="noopener"
                  >Twitter: @SMSCommunity</a
                >
              </li>
              <li>
                <a href="https://www.twitch.tv/SunshineCommunity" target="_blank" rel="noopener"
                  >Twitch: SunshineCommunity</a
                >
              </li>
            </ul>
          </div>
          <div>
            <p>
              GCT Generator &copy; 2017 - {{ new Date().getFullYear() }}
              <a href="https://twitter.com/psychonauter" target="_blank" rel="noopener"
                >Psychonauter</a
              >,
              <a href="https://twitter.com/Qbe_Root" target="_blank" rel="noopener">Noki Doki</a>
              and
              <a href="https://twitter.com/srlMilk" target="_blank" rel="noopener">Milk</a>. The
              source code is available on
              <a href="https://github.com/BitPatty/gctGenerator" target="_blank" rel="noopener"
                >Github</a
              >.
            </p>
            <p>
              Found a bug? Post a message on the SMS Discord (#hacking) and tag psy#1363. During the
              transition the old site will still be available at
              <a href="https://old.gct.zint.ch" target="_blank" rel="noopener"
                >https://old.gct.zint.ch</a
              >.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Components
import VersionSelect from './VersionSelect';
import FormatSelect from './FormatSelect';
import SelectComponent from './SelectComponent';
import StageLoader from './StageLoader';
import CodeInfo from './CodeInfo';
import CodeList from './CodeList';
import DownloadButton from './DownloadButton';

// Data
import gameVersions from '../data/gameVersions.json';

// Util
import parseXml from './scripts/parseXml';

export default {
  data() {
    return {
      codes: [],
      selectedCheats: [],
      selectedStageLoader: null,
      inspectingCode: null,
      selectedVersion: null,
      selectedFormat: 'gct',
      useStageLoader: false,
      stageLoaderCodes: [],
      useStageLoaderOptions: [
        { value: false, label: 'No' },
        { value: true, label: 'Yes' },
      ],
    };
  },
  methods: {
    onVersionChanged(e) {
      this.selectedVersion = e;
      this.selectedCheats = [];
      this.codes = gameVersions.find(c => c.identifier === e).codes;
      this.stageLoaderCodes = gameVersions.find(c => c.identifier === e).fastCode;
      this.inspectingCode = null;
    },
    onFormatChanged(e) {
      this.selectedFormat = e;
    },
    onStageLoaderChanged(e) {
      this.useStageLoader = e === true || e === 'true';
      if (!this.useStageLoader) this.selectedStageLoader = null;
    },
    onCheatSelectionChanged(e) {
      this.selectedCheats = e;
    },
    onStageLoaderCodeChanged(e) {
      this.selectedStageLoader = e;
    },
    inspect(code) {
      this.inspectingCode = code;
    },
  },
};
</script>
<style scoped>
section {
  display: flex;
  flex-wrap: nowrap;
}

.prevent-shrink {
  flex-shrink: 0;
}

section > div {
  display: inline-block;
  vertical-align: top;
}

section > div:not(:first-child) {
  margin-left: 20px;
}

.config {
  position: relative;
}

.config span {
  display: block;
  margin-bottom: 10px;
  padding-left: 2px;
}

.help {
  text-align: left;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
  .config .loading-overlay {
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
  }
}

@media screen and (max-width: 1100px) {
  section {
    flex-wrap: wrap;
    display: block;
    margin-left: 0px;
    text-align: center;
  }

  section > div,
  section > div:not(:first-child) {
    margin-left: 0px;
    width: 100%;
  }
}
</style>

<style>
body {
  overflow-y: scroll;
}
</style>