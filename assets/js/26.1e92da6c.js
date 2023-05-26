(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{513:function(t,a,_){"use strict";_.r(a);var v=_(2),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",[t._v("对GAN网络的学习与介绍"),_("br")])]),t._v(" "),_("h2",{attrs:{id:"摘要"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[t._v("#")]),t._v(" 摘要")]),t._v(" "),_("p",[t._v("生成对抗网络（Generative adversarial network, GAN）自被提出后，就越来越受到学术界和工业界的重视。而随着GAN在理论与模型上的高速发展，它在计算机视觉、自然语言处理、人机交互等领域有着越来越深入的应用，并不断向着其它领域继续延伸。其中，GAN在图像生成上取得了巨大的成功，这取决于GAN在博弈下不断提高建模能力，最终实现以假乱真的图像生成。围绕GAN的研究可以分为两条主线，一是理论主线，从数学理论上研究如何解决GAN的不稳定性和模式崩塌问题，或者从信息理论和基于能量的模型等不同角度重新阐述它。二是应用主线，致力于将GAN应用于计算机视觉领域、利用GAN进行图像生成（指定图像合成、文本到图像，图像到图像、文本到视频）。利用GAN进行图像生成和转换是当前研究最多的，并且该领域的研究已经证明了GAN在图像合成中的巨大潜力。本文从GAN的基本模型开始，简要总结GAN的原理和改进，介绍其在图像生成中的应用与改进的模型，并结合参考文献给出了代码实现。")]),t._v(" "),_("p",[t._v("关键词：计算机视觉；朴素GAN原理；常见GAN")]),t._v(" "),_("h2",{attrs:{id:"第1章-常见的生成模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第1章-常见的生成模型"}},[t._v("#")]),t._v(" 第1章 常见的生成模型")]),t._v(" "),_("h3",{attrs:{id:"_1-1自回归模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1自回归模型"}},[t._v("#")]),t._v(" 1.1自回归模型")]),t._v(" "),_("p",[t._v("原理：基于模型过去的数据点来预测新数据点。\n①输入空间需要对其特征进行确定排序，定义例如左侧的像素在右侧的像素之前，顶部的像素在底部的像素之前；")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/8ShLuTjz.png",alt:""}})]),t._v(" "),_("p",[t._v("②设图像的概率分布是p (x)是像素的联合概率分布，即假设一个像素的值仅取决于它之前的像素的值，然后将联合概率近似为条件概率的乘积。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/lLC42bre.png",alt:""}})]),t._v(" "),_("p",[t._v("按照像素点去生成图像，导致计算成本高，在可并行性上受限，在处理大型数据如大型图像或视频具有一定的麻烦。")]),t._v(" "),_("h3",{attrs:{id:"_1-2变分自编码器-vae"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2变分自编码器-vae"}},[t._v("#")]),t._v(" 1.2变分自编码器（VAE）")]),t._v(" "),_("p",[t._v("传统自编码器通过数值的方式描述潜在空间不同，VAE以概率的方式描述对潜在空间的观察。VAE是在Autoencoder的基础上让图像编码的潜在向量服从高斯分布从而实现图像的生成，优化了数据对数似然的下界，VAE在图像生成上是可并行的， 但是VAE存在着生成图像模糊的问题。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/pZfFjaj0.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_1-3基于流的方法-glow"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3基于流的方法-glow"}},[t._v("#")]),t._v(" 1.3基于流的方法（Glow）")]),t._v(" "),_("p",[t._v("流模型直接从原始问题出发，建立训练数据和生成数据之间的概率关系（这种概率关系是量化的、准确的），然后用可逆的神经网络来训练。相对于VAE而言，Glow在图像的生成，尤其是在图像编码得到的潜在向量精确推断上展示了很好的效果。在人脸合成和属性变化上Glow确实可以媲美GAN。下图是VAE、GAN和基于流（GLOW）三者的原理对比图：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/4lNhMnhJ.jpg",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_1-4生成对抗网络-gan"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4生成对抗网络-gan"}},[t._v("#")]),t._v(" 1.4生成对抗网络（GAN）")]),t._v(" "),_("p",[t._v("GAN的思想就是利用博弈不断的优化生成器和判别器从而使得生成的图像与真实图像在分布上越来越相近。GAN生成的图像比较清晰，在很多GAN的拓展工作中也取得了很大的提高。但是GAN生成中的多样性不足以及训练过程不稳定是GAN一直以来的问题。GAN在图像生成上的应用最为突出，在计算机视觉中还有许多其他应用，如图像绘画，图像标注，物体检测和语义分割。")]),t._v(" "),_("h2",{attrs:{id:"第2章-gan的基本原理与研究进展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第2章-gan的基本原理与研究进展"}},[t._v("#")]),t._v(" 第2章 GAN的基本原理与研究进展")]),t._v(" "),_("h3",{attrs:{id:"_2-1朴素gan的基本模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1朴素gan的基本模型"}},[t._v("#")]),t._v(" 2.1朴素GAN的基本模型")]),t._v(" "),_("p",[t._v("GAN受博弈论中的零和博弈启发，将生成问题视作判别器和生成器这两个网络的对抗和博弈：生成器从给定噪声中（一般是指均匀分布或者正态分布）产生合成数据，判别器分辨生成器的的输出和真实数据。前者试图产生更接近真实的数据，相应地，后者试图更完美地分辨真实数据与生成数据。由此，两个网络在对抗中进步，在进步后继续对抗，由生成网络得到的数据也就越来越完美，逼近真实数据，从而可以生成想要得到的数据（图片、序列、视频等）。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/HAT3SCtM.jpg",alt:""}})]),t._v(" "),_("p",[t._v("理论上GAN可以将任意的分布作为输入，如上图所示，输入z为随机噪声，在实验中我们多取z∼(0,1)或z∼[-1,1]的均匀分布作为输入。生成器G的参数为θ，输入 z 在生成器下得到 ，输出可以被视为从分布中抽取的样本 。对于训练样本 x 的数据分布为 ，生成器G的目标是使 近似 ，判别器D的目标则是尽可能区分生成样本和真实样本的真假，通过最大-最小博弈来进行训练，这种博弈可公式化为：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/Bs7bFACX.png",alt:""}})]),t._v(" "),_("p",[t._v("其中第一项的logD(x)表示判别器对真实数据的判断，第二项log(1-D(G(z)))表示对合成数据的判断。通过这样一个最大最小(Max-min)博弈，循环交替地分别优化G和D来训练所需要的生成式网络与判别式网络，直到到达Nash均衡点。")]),t._v(" "),_("h3",{attrs:{id:"_2-2-gan的问题与研究进展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-gan的问题与研究进展"}},[t._v("#")]),t._v(" 2.2 GAN的问题与研究进展")]),t._v(" "),_("p",[t._v("最早GAN的提出是为了通过生成模型和判别模型对抗来达到对生成图片最大相似度的伪装，比起VAE生成的图片会比较清晰。但是原始GAN模型本身也存在一些问题，主要的问题有两个：")]),t._v(" "),_("p",[t._v("(1)判别器越好，生成器的梯度消失越严重，这样会导致在网络训练上很多时候生成器的参数基本上不会发生改变。")]),t._v(" "),_("p",[t._v("(2)由于网络是对抗式的，常常会造成训练时模型的崩溃（collapse mode），在训练时往往需要权衡训练的生成器与鉴别器的参数来防止崩溃的发生。这样在实际的应用上也带了很多不便。")]),t._v(" "),_("p",[t._v("WGAN和WGAN-GP首先分析了原始GAN的问题，前者通过对生成样本和真实样本加噪声使得两个分布产生重叠，理论上可以解决训练不稳定；后者引入梯度惩罚，使得GAN训练更加稳定，收敛更快，同时能够生成更高质量的样本。LSGAN使用最小二乘损失函数代替了原始GAN的损失函数，让模型在训练的过程中更多的关注真实度不高的样本，缓解了GAN训练不稳定和生成图像质量差多样性不足的问题。DCGAN将CNN引入生成器和判别器，借助CNN更强的拟合与表达能力，缓解GAN的问题的同时，大大提高了生成图像的能力。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/D6rAx48R.jpg",alt:""}})]),t._v(" "),_("p",[t._v("此外，在研究中也产生了很多GAN的变种，比较突出的有将GAN与Encoder结合起来的BiGAN和ALI，与VAE结合起来的VAE-GAN，添加额外辅助分类器的ACGAN，以及添加监督信息的cGAN，引入信息理论的infoGAN，和引入能量的概念与方法的EBGAN[16]等。这些变种在不同的目标上增强了GAN模型的拟合能力与鲁棒性，极大地扩展了GAN的应用范围。")]),t._v(" "),_("h3",{attrs:{id:"_2-3-gan-图像生成"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-gan-图像生成"}},[t._v("#")]),t._v(" 2.3 GAN-图像生成")]),t._v(" "),_("p",[t._v("根据不同的GAN所拥有的生成器和判别器的数量，可以将GAN图像生成的方法概括为三类：直接方法，迭代方法和分层方法。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/fZL9Exay.jpg",alt:""}})]),t._v(" "),_("p",[t._v("(1)直接法")]),t._v(" "),_("p",[t._v("早期的GANs都遵循在其模型中使用一个生成器和一个判别器的原理，并且生成器和判别器的结构是直接的，没有分支。如GAN、DCGAN、ImprovedGAN，InfoGAN，f-GAN和GANINT-CLS。这类方法在设计和实现上比较容易，通常也能得到良好的效果。")]),t._v(" "),_("p",[t._v("(2)分层法")]),t._v(" "),_("p",[t._v("分层法的主要思想是将图像分成两部分，如“样式和结构”和“前景和背景”，然后在其模型中使用两个生成器和两个鉴别器，其中不同的生成器生成图像的不同部分，然后再结合起来。两个生成器之间的关系可以是并联的或串联的。")]),t._v(" "),_("p",[t._v("以SS-GAN为例，其使用两个GAN，一个Structure-GAN用于生成表面结构，然后再由Style-GAN补充图片细节，最后生成图片，整体结构如下所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/KB7WVHem.jpg",alt:""}})]),t._v(" "),_("p",[t._v("(3)迭代法")]),t._v(" "),_("p",[t._v("迭代法使用具有相似或甚至相同结构的多个生成器，经过迭代生成从粗到细的图像。")]),t._v(" "),_("p",[t._v("以LAPGAN为例：LAPGAN中的多个生成器执行相同的任务：最低级别的生成器仅将噪声向量作为输入并输出图像，而其他生成器都从前一个生成器获取图像并将噪声矢量作为输入，这些生成器结构的唯一区别在于输入/输出尺寸的大小，每一次迭代后的图像都拥有更多清晰的细节。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/OpnpA6Ht.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_2-4-gan-图像转换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-gan-图像转换"}},[t._v("#")]),t._v(" 2.4 GAN-图像转换")]),t._v(" "),_("p",[t._v("图像到图像的转换被定义为将一个场景的可能表示转换成另一个场景的问题，例如图像结构图映射到RGB图像，或者反过来。该问题与风格迁移有关，其采用内容图像和样式图像并输出具有内容图像的内容和样式图像的样式的图像。图像到图像转换可以被视为风格迁移的概括，因为它不仅限于转移图像的风格，还可以操纵对象的属性。")]),t._v(" "),_("p",[t._v("图像到图像的转换可分为有监督和无监督两大类，根据生成结果的多样性又可分为一对一生成和一对多生成两类：")]),t._v(" "),_("p",[t._v("(1)有监督下图像到图像转换（paired image translation）")]),t._v(" "),_("p",[t._v("在原始GAN中，因为输出仅依赖于随机噪声，所以无法控制生成的内容。但CGAN的提出使得我们可以将条件输入y添加到随机噪声Z，以便生成的图像由G(z,y)定义。条件y可以是任何信息，如图像标注，对象的属性、文本描述，甚至是图片。CGAN的结构如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/XOBT78qA.png",alt:""}})]),t._v(" "),_("p",[t._v("如果引入图片作为监督信息，CGAN就可以完成一些paired data才能完成的任务，如把轮廓图转化成真实图片，把mask转化成真实图，把黑白图转化成真实图等。其中最具代表性的工作为pix2pix，结构图如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/EJLrY37e.png",alt:""}})]),t._v(" "),_("p",[t._v("(2)无监督的图像到图像转换（unpaired image translation）")]),t._v(" "),_("p",[t._v("虽然有监督下图像转换可以得到很好的效果，但需要的条件信息以及paired image成为其很大的限制。但如果用无监督学习，学习到的网络可能会把相同的输入映射成不同的输出，这就意味着，我们输入任意 Xi并不能得到想要的输出 Yi。")]),t._v(" "),_("p",[t._v("CycleGAN、DualGAN  和DiscoGAN 突破了这个限制，这几项工作都提出了一致/重构损失（consistent loss），采取了一个直观的思想：即生成的图像再用逆映射生成回去应该与输入的图像尽可能接近。在转换中使用两个生成器和两个判别器，两个生成器  和  进行相反的转换，试图在转换周期后保留输入图像。")]),t._v(" "),_("p",[t._v("以CycleGAN为例，在CycleGAN中，有两个生成器，  用于将图像从域X传输到Y， 用于执行相反的转换。此外，还有两个判别器 和  判断图像是否属于该域。cycleGAN结构如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/0DCJz8gn.png",alt:""}})]),t._v(" "),_("p",[t._v("其损失函数由下式进行描述：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/IXQgwbtr.png",alt:""}})]),t._v(" "),_("p",[t._v("生成效果：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/aWyqG84D.png",alt:""}})]),t._v(" "),_("p",[t._v("GAN在图像生成和转换中的巨大潜力已经得到研究证明，利用GAN进行图像到图像间的生成和转换最好已经到达几乎无法分辨的地步。除此之外，利用GAN进行指定图像合成，生成高清图像和视频，以及将GAN应用于NLP和其他领域的研究都还受到研究者们的重点关注。GAN图像生成仍然会是一个充满挑战与价值的课题，存在很大的研究空间。")]),t._v(" "),_("h2",{attrs:{id:"第3章-图像生成展望"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第3章-图像生成展望"}},[t._v("#")]),t._v(" 第3章 图像生成展望")]),t._v(" "),_("h3",{attrs:{id:"_3-1-图像生成的最新成果-dall-e"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-图像生成的最新成果-dall-e"}},[t._v("#")]),t._v(" 3.1 图像生成的最新成果：DALL-E")]),t._v(" "),_("p",[t._v("原理：①将文本提示输入文本编码器，该训练过的编码器便将文本提示映射到表示空间；②CLIP模型将文本编码映射到相应的图像编码，图像编码捕获文本编码中包含的关键语义信息；③图像解码模型随机生成一幅从视觉上表现该语义信息的图像。")]),t._v(" "),_("p",[t._v("CLIP模型接受过数亿张图片及其相关文字的训练，学习到了给定文本片段与图像的关联。即CLIP模型做的是对比性而非预测性的工作。DALL-E结构图如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/VupTBM3x.png",alt:""}})]),t._v(" "),_("p",[t._v("DALL-E生成效果如下：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/lbCb7mdt.png",alt:""}})]),t._v(" "),_("p",[t._v("相对于GAN网络而言，DALL-E模型对于特征融合和未知事物的创造，都显现出巨大的优势。但是相对来说，GAN网络是在博弈中创造出新的图片，而DALL-E只是在足够的训练样本之上，进行了文字与图像对比后的融合。")]),t._v(" "),_("h3",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献：")]),t._v(" "),_("p",[t._v("[1] Goodfellow, Ian, et al. “Generative adversarial nets.” Advances in neural information processing systems. 2014.")]),t._v(" "),_("p",[t._v("[2] M. Arjovsky, S. Chintala, and L. Bottou, “Wasserstein gan,” arXiv preprint arXiv:1701.07875, 2017.")]),t._v(" "),_("p",[t._v("[3] Hierarchical Text-Conditional Image Generation with CLIP Latents.")]),t._v(" "),_("p",[t._v("[4] M. Mirza and S. Osindero, “Conditional generative adversarial nets,”arXiv preprint arXiv:1411.1784, 2014.")])])}),[],!1,null,null,null);a.default=s.exports}}]);