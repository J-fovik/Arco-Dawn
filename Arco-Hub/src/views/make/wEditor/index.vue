<template>
	<ZsContent>
		<a-card class="general-card" title="富文本">
			<a-form ref="formRef" size="large" layout="vertical" auto-label-width :model="form">
				<a-grid :cols="2" :col-gap="20">
					<a-grid-item :span="24">
						<a-form-item field="article" label="富文本">
							<zs-w-editor
								v-model="form.article"
								:upload-img="uploadImg"
							></zs-w-editor>
						</a-form-item>
					</a-grid-item>
				</a-grid>
			</a-form>
		</a-card>
	</ZsContent>
</template>

<script lang="ts" setup name="MakeWEditor">
import { useForm, useBasicsState } from '@/hooks';
import { URL, curryingRequest } from '@/service';
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form, formRef } = useForm(() => ({
	article: '',
}));

// 图片上传
const uploadImg = async (file: any) => {
	// 图片上传
	const { res } = await curryingRequest({
		url: URL.FILE.UPLOAD_IMG,
		data: {
			file,
		},
		headers: {
			'Content-type': 'multipart/form-data',
		},
	});
	// 返回图片路径
	return res?.data;
};
</script>
