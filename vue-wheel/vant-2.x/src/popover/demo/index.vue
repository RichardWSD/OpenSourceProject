<template>
  <demo-section>
    <demo-block :title="t('basicUsage')">
      <van-popover
        v-model="show.lightTheme"
        trigger="click"
        :actions="t('actions')"
        placement="bottom-start"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t('lightTheme') }}
          </van-button>
        </template>
      </van-popover>
      <van-popover
        v-model="show.darkTheme"
        theme="dark"
        trigger="click"
        :actions="t('actions')"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t('darkTheme') }}
          </van-button>
        </template>
      </van-popover>
    </demo-block>

    <demo-block :title="t('placement')">
      <van-field
        is-link
        readonly
        name="picker"
        :label="t('choosePlacement')"
        @click="showPicker = true"
      />

      <van-popup
        v-model="showPicker"
        round
        position="bottom"
        get-container="body"
      >
        <div class="demo-popover-box">
          <van-popover
            v-model="show.placement"
            theme="dark"
            trigger="click"
            :actions="t('shortActions')"
            :placement="currentPlacement"
            @select="onSelect"
          >
            <template #reference>
              <div class="demo-popover-refer" />
            </template>
          </van-popover>
        </div>
        <van-picker :columns="placements" @change="onPickerChange" />
      </van-popup>
    </demo-block>

    <demo-block :title="t('actionOptions')">
      <van-popover
        v-model="show.showIcon"
        trigger="click"
        :actions="t('actionsWithIcon')"
        placement="bottom-start"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t('showIcon') }}
          </van-button>
        </template>
      </van-popover>

      <van-popover
        v-model="show.disableAction"
        trigger="click"
        :actions="t('actionsDisabled')"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ t('disableAction') }}
          </van-button>
        </template>
      </van-popover>
    </demo-block>

    <demo-block :title="t('customContent')">
      <van-popover
        v-model="show.customContent"
        trigger="click"
        placement="top-start"
        style="margin-left: 16px;"
        @select="onSelect"
      >
        <van-grid
          square
          clickable
          :border="false"
          column-num="3"
          style="width: 240px;"
        >
          <van-grid-item
            v-for="i in 6"
            :key="i"
            icon="photo-o"
            :text="t('option')"
            @click="show.customContent = false"
          />
        </van-grid>
        <template #reference>
          <van-button type="primary">
            {{ t('customContent') }}
          </van-button>
        </template>
      </van-popover>
    </demo-block>
  </demo-section>
</template>

<script>
import Toast from '../../toast';

export default {
  i18n: {
    'zh-CN': {
      actions: [{ text: '?????????' }, { text: '?????????' }, { text: '?????????' }],
      shortActions: [{ text: '?????????' }, { text: '?????????' }],
      actionsWithIcon: [
        { text: '?????????', icon: 'add-o' },
        { text: '?????????', icon: 'music-o' },
        { text: '?????????', icon: 'more-o' },
      ],
      actionsDisabled: [
        { text: '?????????', disabled: true },
        { text: '?????????', disabled: true },
        { text: '?????????' },
      ],
      showIcon: '????????????',
      placement: '????????????',
      darkTheme: '????????????',
      lightTheme: '????????????',
      showPopover: '??????????????????',
      actionOptions: '????????????',
      customContent: '???????????????',
      disableAction: '????????????',
      choosePlacement: '??????????????????',
    },
    'en-US': {
      actions: [
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' },
      ],
      shortActions: [{ text: 'Option 1' }, { text: 'Option 2' }],
      actionsWithIcon: [
        { text: 'Option 1', icon: 'add-o' },
        { text: 'Option 2', icon: 'music-o' },
        { text: 'Option 3', icon: 'more-o' },
      ],
      actionsDisabled: [
        { text: 'Option 1', disabled: true },
        { text: 'Option 2', disabled: true },
        { text: 'Option 3' },
      ],
      showIcon: 'Show Icon',
      placement: 'Placement',
      darkTheme: 'Dark Theme',
      lightTheme: 'Light Theme',
      showPopover: 'Show Popover',
      actionOptions: 'Action Options',
      customContent: 'Custom Content',
      disableAction: 'Disable Action',
      choosePlacement: 'Placement',
    },
  },

  data() {
    return {
      show: {
        showIcon: false,
        placement: false,
        darkTheme: false,
        lightTheme: false,
        customContent: false,
        disableAction: false,
      },
      showPicker: false,
      currentPlacement: 'top',
      placements: [
        'top',
        'top-start',
        'top-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
    };
  },

  methods: {
    onPickerChange(picker, value) {
      setTimeout(() => {
        this.show.placement = true;
        this.currentPlacement = value;
      });
    },
    onSelect(action) {
      Toast(action.text);
    },
  },
};
</script>

<style lang="less">
@import '../../style/var';

.demo-popover {
  &-refer {
    width: 60px;
    height: 60px;
    background-color: @blue;
    border-radius: 8px;
  }

  .van-field {
    width: auto;
    margin: 0 12px;
    overflow: hidden;
    border-radius: 8px;
  }

  &-box {
    display: flex;
    justify-content: center;
    margin: 110px 0;
  }
}
</style>
