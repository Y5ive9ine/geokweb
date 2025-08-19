'use client'

import { useEffect, useState } from 'react'
import { brandApi } from '@/services/brand'
import { authUtils } from '@/services/auth'
import { Brand } from '@/lib/types'

export function BrandSelector({
	value,
	onChange,
}: {
	value?: string
	onChange?: (id: string) => void
}) {
	const [brands, setBrands] = useState<Brand[]>([])

	useEffect(() => {
		;(async () => {
			try {
				const res = await brandApi.list({ page: 1, page_size: 50 })
				const list = Array.isArray(res.data) ? res.data : (res.data?.data || [])
				setBrands(list)
			} catch (e) {
				console.error('获取品牌列表失败', e)
			}
		})()
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const id = e.target.value
		if (onChange) onChange(id)
		const user = authUtils.getUserInfo()
		if (user) {
			user.current_brand_id = id
			authUtils.setUserInfo(user)
		}
	}

	return (
		<div className="flex items-center gap-3">
			<select
				value={value || ''}
				onChange={handleChange}
				className="border border-gray-300 rounded px-3 py-2 text-sm bg-white"
			>
				<option value="" disabled>
					选择品牌
				</option>
				{brands.map((b) => (
					<option key={b.id} value={b.id}>
						{b.name}
					</option>
				))}
			</select>
			<a
				href="/auth/register/onboarding"
				className="text-sm px-3 py-2 border border-[#2663FF] text-[#2663FF] rounded hover:bg-blue-50"
			>
				添加品牌
			</a>
		</div>
	)
}



